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
      Dados Internacionais de Cataloga????o na Publica????o (CIP)<br>
      Faculdade do Vale Jaguaribe<br>
      Biblioteca Dr. Salom??o Mussolini Pinheiro Maia<br>
      Gerada automaticamente pelo m??dulo Catalog. mediante os dados fornecidos pelo(a) autor(a)<br>
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
       ${tipo} ??? ${instituicao} - Curso de
        ${curso}.
      <br>
      Orienta????o: ${orientadorNome} ${sobrenomeOrientador}.
      <br>
      Coorienta????o: ${coorientadorNome} ${sobrenomeCoorientador}.
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
       <option>SERVI??O SOCIAL</option>
    `;
  }
  if (opcao == "cxt") {
    curso.innerHTML = `
         <option>ENGENHARIA AGRON??MICA</option>
         <option>MEDICINA VETERIN??RIA</option>
      `;
  }
  if (opcao == "cbs") {
    curso.innerHTML = `
         <option>BIOMEDICINA</option>
         <option>EDUCA????O F??SICA</option>
         <option>ENFERMAGEM</option>
         <option>FARM??CIA</option>
         <option>FISIOTERAPIA</option>
         <option>FONOAUDIOLOGIA</option>
         <option>MEDICINA</option>
         <option>NUTRI????O</option>
         <option>ODONTOLOGIA</option>
      `;
  }
  if (opcao == "csa") {
    curso.innerHTML = `
           <option>ADMINISTRA????O</option>
           <option>CI??NCIAS CONT??BEIS</option>
           <option>CI??NCIAS ECON??MICAS</option>
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
           <option>ENGENHARIA DE PRODU????O</option>
           <option>ENGENHARIA EL??TRICA</option>
        `;
  }
  if (opcao == "t") {
    curso.innerHTML = `
           <option>C. S. DE TECN. EM CONSTRU????O DE ED??FICIOS</option>
           <option>C. S. DE TECN. EM DESIGN GR??FICO</option>
           <option>C. S. DE TECN EM GEST??O DE PRODU????O</option>
           <option>C. S. DE TECN. EM GEST??O DE QUALIDADE</option>
           <option>C. S. DE TECN TECN. EM GEST??O DE RECURSOS</option>
           <option>C. S. DE TECN. E. GEST??O EM TECNOLOGIA DA INFORMA????O</option>
           <option>C. S. DE TECN. EM LOG??STICA</option>
           <option>C. S. DE TECN. EM PETR??LEO E G??S</option>
           <option>C. S. DE TECN. EM SEGURAN??A NO TRABALHO</option>
        `;
  }
  if (opcao == "l") {
    curso.innerHTML = `
           <option>Licenciatura em Educa????o F??sica</option>
           <option>Licenciatura plena em Ci??ncias Biol??gicas</option>
           <option>Licenciatura plena em Hist??ria</option>
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
           <option>Administra????o de Marketing</option>
           <option>Administra????o hospitalar e de Servi??os de Sa??de</option>
           <option>Administra????o P??blica e Gerenciamento de Cidades</option>
           <option>An??lises Cl??nicas</option>
           <option>Audiologia</option>
           <option>Auditoria e Per??cia Cont??bil</option>
           <option>Com??rcio Exterior e Rela????es Internacionais</option>
           <option>Design de Interiores</option>
           <option>Did??tica de ensino</option>
           <option>Direito Civil e Processual Civil</option>
           <option>Engenharia da Seguran??a do Trabalho</option>
           <option>Gest??o da Qualidade em Seguran??a Alimentar</option>
           <option>Gest??o e Planejamento de Recursos Humanos</option>
           <option>Gest??o Estrat??gica de Neg??cios e Globaliza????o</option>
           <option>Gest??o Estrat??gica e Log??stica</option>
           <option>Gest??o Financeira e Controladoria</option>
           <option>Motricidade Orofacial com ??nfase em Fonoaudiologia Hospitalar</option>
           <option>Nutri????o Cl??nica Funcional</option>
        `;
  }
}


function pdf(html){
  let janela = window.open('', '', 'width=12.50cm', 'height=7.50cm');
  janela.document.write(html);
  janela.document.close();
  janela.print()
}
