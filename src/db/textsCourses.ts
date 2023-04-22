import { ICourses } from '../interfaces';

import { imgEnfermagem, imgFarmacia, imgRadiologia } from '../images';

const texts: ICourses[] = [
  {
    image: imgEnfermagem,
    title: 'Técnico em Enfermagem',
    description: `
    O Curso Técnico em Enfermagem tem como objetivo formar profissionais para o
    exercício de funções relacionadas a Enfermagem, capacitando-os para o
    planejamento de atividades e prestação dos cuidados
    necessários ao indivíduo saudável ou doente.`,
    descriptionMore: `
    Está entre suas principais atribuições promover ações de orientação e
    preparo do paciente para exames,
    além de realizar cuidados de enfermagem, como curativos, administração
    de medicamentos, banho no
    leito, verificação de sinais vitais, dentre outros a todos os
    pacientes/clientes clínicos, cirúrgicos,
    pediátricos e graves.`,
    occuparionArea: [
      'atendem em hospitais;',
      'clínicas;',
      'laboratórios;',
      'postos de saúde;',
      'empresas de grandes portes e a domicilio.'
    ],
    requirements: `
    Para fazer este curso, o(a) interessado(a) deve ter no mínimo 17
    anos e ter concluído ou estar
    cursando a partir do segundo ano do Ensino Médio.`,
    requirementsMore: '',
    duration: '26 meses'
  },
  {
    image: imgFarmacia,
    title: 'Técnico em Farmácia',
    description: `
    O Curso Técnico em Farmácia tem como objetivo formar pessoal qualificado
    para atuar na área de vendas, dispensação de materiais, auxiliar na
    manipulação de medicamentos, além de atuar na distribuição de medicamentos
    da farmácia hospitalar.`,
    descriptionMore: '',
    occuparionArea: [
      'drogarias comerciais;',
      'laboratórios;',
      'farmácias de manipulação;',
      'farmácias hospitalares e de Unidades Básicas de Saúde;',
      'distribuidoras de medicamentos, insumos e correlatos;',
      'indústrias farmacêuticas.'
    ],
    requirements: `Suas atividades são desenvolvidas sob supervisão e orientação do
    Farmacêutico.`,
    requirementsMore: `
    Para fazer este curso, o(a) interessado(a) deve ter no mínimo 16 anos e
    ter concluído ou estar cursando a partir do segundo ano do Ensino Médio.`,
    duration: '19 meses'
  },
  {
    image: imgRadiologia,
    title: 'Técnico em Radiologia',
    description: `
    O Curso Técnico em Radiologia prepara o profissional para atuar nas diversas
    áreas de aplicação da radiação ionizante e fornecer subsídios de imagem para
    o diagnóstico de diversas patologias.`,
    descriptionMore: `O profissional realiza exames radiográficos convencionais. Processa
    filmes radiológicos. Prepara o paciente e o ambiente para a realização de
    exames nos serviços de radiologia e diagnóstico por imagem, tais como:
    mamografia, hemodinâmica, tomografia computadorizada, densitometria óssea,
    ressonância magnética nuclear e ultra-sonografia. Acompanha a utilização de
    meios de contraste radiológicos, observando os princípios de proteção
    radiológica, avaliando reações adversas e agindo em situações de urgência,
    sob supervisão profissional pertinente.`,
    occuparionArea: [
      'hospitais;',
      'clínicas;',
      'prontos-socorros;',
      'postos de saúde;',
      'laboratórios de radiologia.'
    ],
    requirements: `Para fazer este curso, o(a) interessado(a) deve ter 18 anos completos e
    ter concluído o Ensino Médio.`,
    requirementsMore: '',
    duration: '19 meses'
  }
];

export default texts;
