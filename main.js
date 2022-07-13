const form = document.querySelector("#form");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    
    //MAPEANDO AUTORES
    //nomes
    const autorNome = document.querySelector("#autorNome").value;
    const coautor1Nome = document.querySelector("#coautorNome").value;
    const coautor2Nome = document.querySelector("#coautorNome2").value;
    //sobrenomes
    const sobrenomeAutor = document.querySelector("#sobrenomeAutor").value;
    const sobrenomeCoautor = document.querySelector("#sobrenomeCoautor").value;
    const sobrenomeCoautor2 = document.querySelector("#sobrenomeCoautor2").value;
    
    //MAPEANDO ORINTADORES
    //orientador
     //nome
    const orientadorNome = document.querySelector("#orientadorNome").value;
    const titulacaoOrientador = document.querySelector("#titulacaoOrientador option:checked").value;
     //sobrenome
    const sobrenomeOrientador = document.querySelector("#sobrenomeOrientador").value;
    //coorientador
      //nome
    const coorientadorNome = document.querySelector("#coorientadorNome").value;
    const titulacaoCoorientador = document.querySelector("#titulacaoCoorientador option:checked").value;
     //nome
     const sobrenomeCoorientador = document.querySelector("#sobrenomeCoorientador").value;

   //MAPEANDO TRABALHO
   //area primaria
   const titulo = document.querySelector("#titulo").value;
   
   const instituicao = document.querySelector("#instituicao option:checked").value;
   
   const curso = document.querySelector("#curso option:checked").value;
   
   const assunto2 = document.querySelector("#assunto2").value;
   
   const assunto4 = document.querySelector("#assunto4").value;
   
   const ano = document.querySelector("#ano").value;

   //area secundaria
   const tipo = document.querySelector("#tipo option:checked").value;
   
   const area = document.querySelector("#area option:checked").value;
 
   const assunto1 = document.querySelector("#assunto1").value;

   const assunto3 = document.querySelector("#assunto3").value;

   const assunto5 = document.querySelector("#assunto5").value;

   const numeroPaginas = document.querySelector("#numeroPaginas").value;


  
let htmlPdf = `
<html>
<head>
  <title>PDF</title>
  <link rel="stylesheet" href="pdf.css">
</head>
<body>
   <div>
     <div class="div1">
     <p>
      Dados Internacionais de Catalogação na Publicação (CIP)<br>
      Faculdade do Vale Jaguaribe<br>
      Biblioteca Dr. Salomão Mussolini Pinheiro Maia<br>
      Gerada automaticamente pelo módulo Catalog. mediante os dados fornecidos pelo(a) autor(a)<br>
     </p>
     </div>
     <hr>
     <div class="div2">
     <p>
      ${autorNome} ${sobrenomeAutor}
     </p>
     <p>
      ${area} / ${orientadorNome} ${sobrenomeOrientador}. - ${ano}<br>
      ${numeroPaginas}f.:
     </p>
     <p>
       ${tipo} – ${instituicao} - Curso de
        ${curso}.
      <br>
      Orientação: ${orientadorNome} ${sobrenomeOrientador}.
      <br>
      Coorientação: ${coorientadorNome} ${sobrenomeCoorientador}.
     </p>
     <p>
     1. ${assunto1} 2. ${assunto2} 3. ${assunto3} I. ${titulo}. II. ${instituicao} III. ${autorNome} ${sobrenomeAutor}.
     </p>
     </div>
     <hr>
  </div>
</body>
</html>`

pdf(htmlPdf)

});



let curso = document.querySelector("#curso")

function areaC(){
  let select = document.querySelector("#area");
  let index = select.selectedIndex
  let opcao = select.options[index].value
  if(opcao == "chs"){
    curso.innerHTML = `
       <option>DIREITO</option>
       <option>PSICOLOGIA</option>
       <option>SERVIÇO SOCIAL</option>
    `;
  }
  if (opcao == "cxt") {
    curso.innerHTML = `
         <option>ENGENHARIA AGRONÔMICA</option>
         <option>MEDICINA VETERINÁRIA</option>
      `;
  }
  if (opcao == "cbs") {
    curso.innerHTML = `
         <option>BIOMEDICINA</option>
         <option>EDUCAÇÃO FÍSICA</option>
         <option>ENFERMAGEM</option>
         <option>FARMÁCIA</option>
         <option>FISIOTERAPIA</option>
         <option>FONOAUDIOLOGIA</option>
         <option>MEDICINA</option>
         <option>NUTRIÇÃO</option>
         <option>ODONTOLOGIA</option>
      `;
  }
  if (opcao == "csa") {
    curso.innerHTML = `
           <option>ADMINISTRAÇÃO</option>
           <option>CIÊNCIAS CONTÁBEIS</option>
           <option>CIÊNCIAS ECONÔMICAS</option>
           <option>JORNALISMO</option>
           <option>PUBLICIDADE E PROPAGANDA</option>
           <option>TURISMO</option>
        `;
  }
  if (opcao == "et") {
    curso.innerHTML = `
           <option>ARQUITETURA E URBANISMO</option>
           <option>ENGENHARIA AMBIENTAL</option>
           <option>ENGENHARIA CIVIL</option>
           <option>ENGENHARIA DE PRODUÇÃO</option>
           <option>ENGENHARIA ELÉTRICA</option>
        `;
  }
  if (opcao == "t") {
    curso.innerHTML = `
           <option>C. S. DE TECN. EM CONSTRUÇÃO DE EDÍFICIOS</option>
           <option>C. S. DE TECN. EM DESIGN GRÁFICO</option>
           <option>C. S. DE TECN EM GESTÃO DE PRODUÇÃO</option>
           <option>C. S. DE TECN. EM GESTÃO DE QUALIDADE</option>
           <option>C. S. DE TECN TECN. EM GESTÃO DE RECURSOS</option>
           <option>C. S. DE TECN. E. GESTÃO EM TECNOLOGIA DA INFORMAÇÃO</option>
           <option>C. S. DE TECN. EM LOGÍSTICA</option>
           <option>C. S. DE TECN. EM PETRÓLEO E GÁS</option>
           <option>C. S. DE TECN. EM SEGURANÇA NO TRABALHO</option>
        `;
  }
  if (opcao == "l") {
    curso.innerHTML = `
           <option>Licenciatura em Educação Física</option>
           <option>Licenciatura plena em Ciências Biológicas</option>
           <option>Licenciatura plena em História</option>
           <option>Licenciatura plena em Letra</option>
           <option>Pedagogia</option>
        `;
  }
  if (opcao == "md") {
    curso.innerHTML = `
           <option>Agricultura</option>
           <option>Biologia urbana</option>
           <option>Psicultura</option>
        `;
  }
  if (opcao == "e") {
    curso.innerHTML = `
           <option>Administração de Marketing</option>
           <option>Administração hospitalar e de Serviços de Saúde</option>
           <option>Administração Pública e Gerenciamento de Cidades</option>
           <option>Análises Clínicas</option>
           <option>Audiologia</option>
           <option>Auditoria e Perícia Contábil</option>
           <option>Comércio Exterior e Relações Internacionais</option>
           <option>Design de Interiores</option>
           <option>Didática de ensino</option>
           <option>Direito Civil e Processual Civil</option>
           <option>Engenharia da Segurança do Trabalho</option>
           <option>Gestão da Qualidade em Segurança Alimentar</option>
           <option>Gestão e Planejamento de Recursos Humanos</option>
           <option>Gestão Estratégica de Negócios e Globalização</option>
           <option>Gestão Estratégica e Logística</option>
           <option>Gestão Financeira e Controladoria</option>
           <option>Motricidade Orofacial com ênfase em Fonoaudiologia Hospitalar</option>
           <option>Nutrição Clínica Funcional</option>
        `;
  }
}


function pdf(html){
  let janela = window.open('', '', 'width=12.50cm', 'height=7.50cm');
  janela.document.write(html);
  janela.document.close();
  janela.print()
}
