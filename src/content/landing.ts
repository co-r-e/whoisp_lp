export type LinkContent = {
  label: string;
  href: string;
  icon?: string;
};

export type Metric = {
  label: string;
  value: string;
};

export type Feature = {
  title: string;
  description: string;
};

export type UseCase = {
  title: string;
  description: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type WorkflowStep = {
  step: string;
  title: string;
  body: string;
};

export type LandingCopy = {
  locale: "en" | "ja";
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  brand: {
    mark: string;
    name: string;
    tagline: string;
  };
  headerCta: LinkContent;
  hero: {
    title: string;
    description: string;
    primaryCta: LinkContent;
    secondaryCta?: LinkContent;
    metrics: Metric[];
  };
  demo: {
    title: string;
    description?: string;
    fallbackText: string;
    poster?: string;
  };
  features: Feature[];
  featuresIntro: {
    title: string;
    description: string;
  };
  useCases: {
    title: string;
    description: string;
    items: UseCase[];
  };
  faq: {
    title: string;
    description: string;
    items: FaqItem[];
  };
  workflow: {
    title: string;
    description: string;
    steps: WorkflowStep[];
  };
  openSource: {
    title: string;
    description?: string;
    cta?: LinkContent;
  };
  footer: {
    rightsHolder: string;
    links: LinkContent[];
  };
};

export const landingContent: Record<"en" | "ja", LandingCopy> = {
  en: {
    locale: "en",
    meta: {
      title: "WhoisP | Open Source DeepResearch",
      description:
        "WhoisP delivers automated person-of-interest research by collecting present and historical data, media coverage, and portrait evidence from a single name and company input.",
      keywords: [
        "WhoisP",
        "open source due diligence",
        "person of interest research",
        "background intelligence software",
        "automated dossier builder",
      ],
    },
    brand: {
      mark: "WP",
      name: "WhoisP",
      tagline: "DeepResearch for Human Intelligence",
    },
    headerCta: {
      label: "Download from GitHub",
      href: "https://github.com/co-r-e/whoisp",
      icon: "↗\uFE0E",
    },
    hero: {
      title: "Turn any name into a verified dossier in seconds.",
      description:
        "WhoisP automates person-of-interest due diligence by compiling current and historical positions, media exposure, and portrait evidence from a single name-and-company input. Incident response, investment diligence, and compliance teams finish complete profiles in seconds.",
      primaryCta: {
        label: "Download from GitHub",
        href: "https://github.com/co-r-e/whoisp",
        icon: "↗\uFE0E",
      },
      metrics: [
        { label: "Research time saved", value: "-78%" },
        { label: "Sources scanned automatically", value: "3,200+" },
        { label: "Portrait match accuracy", value: "92%" },
      ],
    },
    demo: {
      title: "See WhoisP in action",
      description:
        "Watch the end-to-end console experience to understand how investigations flow from input to evidence-backed briefings.",
      fallbackText: "Your browser does not support the video element.",
    },
    featuresIntro: {
      title: "Four capabilities that deliver uncompromising depth.",
      description:
        "WhoisP delivers DeepResearch capabilities that cover background checks, activity histories, and source-backed evidence. It plugs into existing workflows with ease so teams can circulate findings instantly.",
    },
    features: [
      {
        title: "Timeline Intelligence Archive",
        description:
          "Consolidates public profiles, corporate registries, speaking engagements, and filings so you always see each subject&#39;s current and historical roles organized automatically.",
      },
      {
        title: "Automated Portrait Crawling",
        description:
          "Cross-references conference photography, press kits, and social avatars so you always see the freshest available portraits linked to each source.",
      },
      {
        title: "Verified Source Trails",
        description:
          "Every fact is backed by a link to the originating article, investor report, or official site so your documentation stays defensible.",
      },
      {
        title: "Open Source by Default",
        description:
          "Clone the repository for free, customize the pipelines to your workflow, and automate due diligence without vendor lock-in.",
      },
    ],
    useCases: {
      title: "Six ways teams rely on WhoisP every day.",
      description:
        "From sales enablement to alliance diligence, each team can spin up verified background intelligence in minutes.",
      items: [
        {
          title: "Sales meeting preparation",
          description:
            "Profile prospects before every call, surface shared experiences, and walk in with an opening line that immediately builds rapport.",
        },
        {
          title: "Proposal personalization",
          description:
            "Use fresh context on the buyer&#39;s situation to assemble tailored pitch decks and follow-up emails in record time.",
        },
        {
          title: "Candidate deep dives",
          description:
            "Review a candidate&#39;s public work, press, and prior roles ahead of structured interviews so you can ask sharper questions.",
        },
        {
          title: "Casual interview warm-ups",
          description:
            "Even informal chats feel polished when you already know the candidate&#39;s background and can reference relevant milestones.",
        },
        {
          title: "Alliance partner research",
          description:
            "Map out a potential partner&#39;s previous initiatives and leadership bench to confirm cultural and strategic fit.",
        },
        {
          title: "Board and exec briefings",
          description:
            "Equip leadership with concise dossiers before investor, M&A, or media meetings so decisions and messaging stay aligned.",
        },
      ],
    },
    faq: {
      title: "Frequently asked questions",
      description:
        "A quick rundown of how WhoisP works, how we handle data, and what to expect when you run your next profile.",
      items: [
        {
          question: "How fresh is the intelligence inside WhoisP?",
          answer:
            "Every scan runs live crawlers against public sources. Cached results are refreshed automatically when a profile is requested again.",
        },
        {
          question: "Do you guarantee every datapoint is accurate?",
          answer:
            "No. WhoisP aggregates third-party information, and public records occasionally contain errors or outdated facts. Review findings before acting and reflect this limitation inside your usage policies and terms of service.",
        },
        {
          question: "Can I self-host WhoisP?",
          answer:
            "Yes. The project is MIT-licensed and designed for private deployment so you can keep sensitive investigations inside your network.",
        },
      ],
    },
    workflow: {
      title: "Produce an evidence-backed profile in three steps.",
      description:
        "The browser console and batch tooling arrive ready to deploy so you can plug person intelligence into existing investigation flows without additional tooling.",
      steps: [
        {
          step: "STEP 1",
          title: "Submit a name and company",
          body: "Send the subject&#39;s name and organization through the web console. Optional parameters for title, geography, or timeframe keep the crawl focused.",
        },
        {
          step: "STEP 2",
          title: "DeepResearch engine analyzes data",
          body: "We scan open data, indexable media coverage, and social graphs, then rank the extracted facts with a transparent confidence score.",
        },
        {
          step: "STEP 3",
          title: "Export Word reports with evidence",
          body: "Download a ready-to-share Word document that consolidates the findings alongside source citations.",
        },
      ],
    },
    openSource: {
      title: "Fully open source so you can host and protect your own data.",
      cta: {
        label: "Download from GitHub",
        href: "https://github.com/co-r-e/whoisp",
        icon: "↗\uFE0E",
      },
    },
    footer: {
      rightsHolder: "CORe Inc. All rights reserved.",
      links: [
        {
          label: "Company",
          href: "https://co-r-e.net",
          icon: "↗\uFE0E",
        },
        {
          label: "Contact",
          href: "https://co-r-e.net/contact",
          icon: "↗\uFE0E",
        },
      ],
    },
  },
  ja: {
    locale: "ja",
    meta: {
      title: "WhoisP | オープンソース人物調査プラットフォーム",
      description:
        "WhoisPは氏名と所属企業を入力するだけで、現在から過去までの情報、メディア掲載、顔写真の証跡を自動収集する人物DeepResearchツールです。",
      keywords: [
        "WhoisP",
        "人物調査",
        "デューデリジェンス",
        "オープンソースツール",
        "自動レポート",
      ],
    },
    brand: {
      mark: "WP",
      name: "WhoisP",
      tagline: "DeepResearch for Human Intelligence",
    },
    headerCta: {
      label: "Gitからダウンロード",
      href: "https://github.com/co-r-e/whoisp",
      icon: "↗\uFE0E",
    },
    hero: {
      title: "氏名と企業を入力するだけで、確かな人物レポートが数秒で完成。",
      description:
        "WhoisPは、人物の現在と過去の経歴、メディア露出、顔写真などを自動で深掘りするDeepResearchプラットフォームです。インシデント対応、投資デューデリジェンス、コンプライアンスのプロセスを数十秒で完結させます。",
      primaryCta: {
        label: "Gitからダウンロード",
        href: "https://github.com/co-r-e/whoisp",
        icon: "↗\uFE0E",
      },
      metrics: [
        { label: "調査時間短縮", value: "-78%" },
        { label: "自動収集ソース", value: "3,200+" },
        { label: "顔写真照合精度", value: "92%" },
      ],
    },
    demo: {
      title: "操作デモを見る",
      description:
        "入力からレポート出力までの操作手順を動画で確認し、導入イメージを掴んでください。",
      fallbackText: "ご利用のブラウザでは動画を再生できません。",
    },
    featuresIntro: {
      title: "深掘りに妥協しない4つの主要機能。",
      description:
        "WhoisPは人物の素性調査、活動履歴、ソース添付を備えたDeepResearch機能を備えています。既存の業務フローに柔軟に組み込めて、調査の成果を素早く共有できます。",
    },
    features: [
      {
        title: "時系列で追跡する人物アーカイブ",
        description:
          "公開プロフィールや企業登記、登壇情報を統合し、人物の現在と過去の役職を自動で整理します。",
      },
      {
        title: "顔写真の自動クロール",
        description:
          "ニュース写真やSNSアイコンを横断し、最新の顔写真ソースを自動で収集します。",
      },
      {
        title: "ソースリンクを添えた事実確認",
        description:
          "取得したファクトにはメディア記事、IR資料、公式サイトのURLを添付し、その場で裏付けを確認できます。",
      },
      {
        title: "フルオープンソースで提供",
        description:
          "GitHubから無料で導入でき、既存の社内フローに合わせたカスタマイズや自動化も柔軟に行えます。",
      },
    ],
    useCases: {
      title: "6つのユースケースで広がる人物インテリジェンス。",
      description:
        "商談準備からアライアンス検討まで、WhoisPは日々の人物調査をスピードと確度で支援します。",
      items: [
        {
          title: "営業商談の事前リサーチ",
          description:
            "商談相手の経歴や最近の活動を確認し、共通点を探って会話の入り口を整えられます。",
        },
        {
          title: "提案資料の高速パーソナライズ",
          description:
            "相手企業の状況やキーパーソンの関心を把握し、最適な提案内容をスピーディーに作成できます。",
        },
        {
          title: "採用面談前の情報把握",
          description:
            "求職者の公開情報を整理し、面談前に強みや興味を理解することで、的確な質問と評価ができます。",
        },
        {
          title: "カジュアル面談の印象向上",
          description:
            "ラフな面談でも事前に背景を押さえておくことで、求職者に『理解してくれている』印象を届けられます。",
        },
        {
          title: "アライアンス候補の調査",
          description:
            "過去の取り組みや主要メンバーを分析し、自社との相性や協業の可能性を見極められます。",
        },
        {
          title: "経営陣向けブリーフィング",
          description:
            "投資家・メディア・M&A相手との会合前に要点をまとめ、判断材料を迅速に揃えられます。",
        },
      ],
    },
    faq: {
      title: "よくある質問",
      description:
        "導入時によく寄せられる疑問にお答えします。利用ポリシー策定の際にもご活用ください。",
      items: [
        {
          question: "WhoisPの情報鮮度はどのくらいですか？",
          answer:
            "各調査で公開ソースをリアルタイムにクロールし、既存のキャッシュも再取得して最新化します。",
        },
        {
          question: "取得した情報の正確性は保証されますか？",
          answer:
            "完全な保証はできません。WhoisPは公開情報を統合しているため、元データに誤りや更新漏れが含まれる可能性があります。利用規約などにおいて、この点を明示したうえでご活用ください。",
        },
        {
          question: "オンプレミスでの運用は可能ですか？",
          answer:
            "可能です。MITライセンスで公開されており、社内ネットワーク内に閉じた形で運用できます。",
        },
      ],
    },
    workflow: {
      title: "証拠付き人物レポートを3ステップで。",
      description:
        "Webコンソールとバッチ自動化テンプレートを同梱しているので、既存の人物調査プロセスに接続するだけで導入が完了します。",
      steps: [
        {
          step: "STEP 1",
          title: "氏名と企業名を送信",
          body: "Webコンソールから対象者の氏名・所属企業を入力。役職や地域などの条件もオプションで指定できます。",
        },
        {
          step: "STEP 2",
          title: "DeepResearchエンジンが解析",
          body: "オープンデータ、メディア記事、SNSグラフをクロールし、信頼スコア順に整理されたファクトセットを生成します。",
        },
        {
          step: "STEP 3",
          title: "Wordレポートを出力",
          body: "調査結果と引用元リンクをまとめたWordファイルをダウンロードし、そのまま共有できます。",
        },
      ],
    },
    openSource: {
      title: "完全オープンソース。自社でホストし、データを守る。",
      cta: {
        label: "Gitからダウンロード",
        href: "https://github.com/co-r-e/whoisp",
        icon: "↗\uFE0E",
      },
    },
    footer: {
      rightsHolder: "CORe Inc. All rights reserved.",
      links: [
        {
          label: "会社情報",
          href: "https://co-r-e.net",
          icon: "↗\uFE0E",
        },
        {
          label: "お問い合わせ",
          href: "https://co-r-e.net/contact",
          icon: "↗\uFE0E",
        },
      ],
    },
  },
};
