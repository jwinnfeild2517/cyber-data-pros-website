export type ServicePageType = {
  [key: string]: {
    title: string
    badgeImageUrl: string
    header: string
    subheader: string
    textBlock1: string
    textBlock2?: string
    dropDownItems: {
      [key: string]: string
    }
  }
}

export type ServicesType = {
  cybersecurity: ServicePageType
  privacy: ServicePageType
  compliance: ServicePageType
  consulting: ServicePageType
}

export const servicesData: ServicesType = {
  cybersecurity: {
    0: {
      title: 'Virtual Chief CISO',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {
        planning: '',
        'current state assessment': '',
        'remediation road map': '',
        'program implementation': '',
        'continuious improvement on ongoing maintenance': '',
      },
    },
    1: {
      title: 'Security Audits',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    2: {
      title: 'Penetration Testing',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    3: {
      title: 'Vulnerability Scanning',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    4: {
      title: 'Risk Assessments',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    5: {
      title: 'Tabletop Exercises',

      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
  },
  consulting: {
    0: {
      title: 'Desaster Recovery',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    1: {
      title: 'Business Continuity',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    2: {
      title: 'Security Questionaires',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    3: {
      title: 'Policy Documents',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    4: {
      title: 'Cloud Infrastructure',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
  },
  compliance: {
    0: {
      title: 'ISO 27001',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    1: {
      title: 'ISO 27701',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    2: {
      title: 'CMMC',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    3: {
      title: 'HIPAA',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    5: {
      title: 'SOC',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
  },
  privacy: {
    0: {
      title: 'Privacy Impact Assessments',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    1: {
      title: 'Privacy Policies',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
    2: {
      title: 'Cookie Compliance',
      badgeImageUrl: '',
      header: '',
      subheader: '',
      textBlock1: '',
      textBlock2: '',
      dropDownItems: {},
    },
  },
}
