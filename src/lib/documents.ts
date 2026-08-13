export type SiteDocument = {
  title: string;
  href: string;
};

export const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type DocumentGroup = {
  title: string;
  description: string;
  documents: SiteDocument[];
};

const localActs: SiteDocument[] = [
  {
    title:
      "Положение о порядке бесплатного пользования образовательными, методическими и научными услугами индивидуального предпринимателя педагогическими работниками",
    href: "/documents/local-act-01.pdf",
  },
  {
    title:
      "Положение о порядке доступа педагогических работников к информационно-телекоммуникационным сетям и базам данных, учебным и методическим материалам, материально-техническим средствам",
    href: "/documents/local-act-02.pdf",
  },
  {
    title:
      "Положение о порядке оформления возникновения, приостановления и прекращения отношений между индивидуальным предпринимателем, учащимися и (или) родителями (законными представителями) учащихся",
    href: "/documents/local-act-03.pdf",
  },
  {
    title: "Положение о внутренней системе оценки качества образования",
    href: "/documents/local-act-04.pdf",
  },
  {
    title:
      "Положение о комиссии по урегулированию споров между участниками образовательных отношений",
    href: "/documents/local-act-05.pdf",
  },
  {
    title: "Положение о порядке и организации проведения самообследования",
    href: "/documents/local-act-06.pdf",
  },
  {
    title:
      "Положение о порядке перевода, отчисления и восстановления обучающихся",
    href: "/documents/local-act-07.pdf",
  },
  {
    title: "Положение о порядке предоставления платных образовательных услуг",
    href: "/documents/local-act-08.pdf",
  },
  {
    title:
      "Положение о порядке применения электронного обучения и дистанционных образовательных технологий при реализации образовательных программ",
    href: "/documents/local-act-09.pdf",
  },
  {
    title: "Положение о режиме занятий обучающихся и формах обучения",
    href: "/documents/local-act-10.pdf",
  },
  {
    title:
      "Положение о соотношении учебной и другой педагогической работы педагогических работников, включая нормы времени для расчета объема работы при реализации образовательных программ с применением электронного обучения и дистанционных образовательных технологий",
    href: "/documents/local-act-11.pdf",
  },
  {
    title:
      "Положение о формах, периодичности и порядке текущего контроля успеваемости, промежуточной аттестации обучающихся",
    href: "/documents/local-act-12.pdf",
  },
  {
    title: "Положение об информационной открытости и официальном сайте",
    href: "/documents/local-act-13.pdf",
  },
  {
    title:
      "Положение об обеспечении обучающихся учебными, методическими и иными образовательными материалами",
    href: "/documents/local-act-14.pdf",
  },
  {
    title: "Положение об обработке и защите персональных данных",
    href: "/documents/local-act-15.pdf",
  },
  {
    title:
      "Положение об основаниях и порядке снижения стоимости платных образовательных услуг",
    href: "/documents/local-act-16.pdf",
  },
  {
    title: "Положение о языке обучения",
    href: "/documents/local-act-17.pdf",
  },
];

export const documentGroups: DocumentGroup[] = [
  {
    title: "Локальные нормативные акты",
    description: "17 положений, регулирующих образовательную деятельность.",
    documents: localActs,
  },
  {
    title: "Правила",
    description: "Правила приема и внутреннего распорядка.",
    documents: [
      {
        title: "Правила приема обучающихся",
        href: "/documents/admission-rules.pdf",
      },
      {
        title: "Правила внутреннего распорядка обучающихся",
        href: "/documents/student-rules.pdf",
      },
      {
        title: "Правила внутреннего трудового распорядка",
        href: "/documents/labor-rules.pdf",
      },
    ],
  },
  {
    title: "Политики и соглашения",
    description:
      "Документы об использовании сайта и обработке персональных данных.",
    documents: [
      {
        title: "Политика обработки персональных данных",
        href: "/documents/personal-data-policy.pdf",
      },
      {
        title: "Согласие на обработку персональных данных",
        href: "/documents/personal-data-consent.pdf",
      },
      {
        title: "Политика использования файлов Cookie",
        href: "/documents/cookie-policy.pdf",
      },
      {
        title: "Пользовательское соглашение",
        href: "/documents/user-agreement.pdf",
      },
    ],
  },
];

export const organizationDocument = "/documents/organization-details.pdf";
export const licenseDocument = "/documents/education-license.pdf";
