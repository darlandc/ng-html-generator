import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-html-generator';

  constructor(private renderer: Renderer2) { }

  generatePage() {
    const homePageContent = '<h1>Página inicial</h1>'; // Conteúdo da página inicial
    const aboutPageContent = '<h1>Sobre</h1>'; // Conteúdo da página "Sobre"

    this.create('home.html', homePageContent);
    this.create('about.html', aboutPageContent);
  }

  create(nomeArquivo: string, conteudo: string) {
    const element = this.renderer.createElement('a');
    element.setAttribute('href', `data:text/html;charset=UTF-8,${encodeURIComponent(conteudo)}`);
    element.setAttribute('download', nomeArquivo);
    this.renderer.setStyle(element, 'display', 'none');
    this.renderer.appendChild(document.body, element);
    element.click();
    this.renderer.removeChild(document.body, element);
  }

}
