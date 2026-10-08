export type CaseStudy = {
  intro: string; context: string; role: string;
  approach: { title: string; body: string }[];
  flow: string[]; flowCaption: string; lessons: string[];
  resources: { label: string; href: string }[]; note?: string;
};

export const caseStudies: Record<string, CaseStudy> = {
  'footy-greece': {
    intro: 'Making everyday workflows more reliable for coaches, athletes, parents and academy staff.',
    context: 'Footy Greece was a sports platform built as a multi-application React and .NET ecosystem. I worked remotely on production features and issue investigation from December 2025 to September 2026. The platform has since closed.',
    role: 'Full-stack developer · Production maintenance and feature delivery',
    flow: ['User workflow', 'React interface', 'ASP.NET Core API', 'SQL data'],
    flowCaption: 'The application layers I worked across. This is a workflow overview, rather than a screenshot of the retired product.',
    approach: [
      { title: 'A complete registration journey', body: 'Worked on replacing side-panel registration with a dedicated page, consistent login/registration navigation, inline validation and mobile-friendly layout. This brought account creation into the same visual and interaction patterns as the rest of the application.' },
      { title: 'Role-aware conversations', body: 'Resolved chat issues involving conversation-name editing permissions and the availability of other coaches as recipients. These tasks required the interface to reflect who could perform an action and which users belonged in a conversation.' },
      { title: 'Consistent athlete information', body: 'Addressed evaluation values that differed between summary charts and profile views, alongside attendance-list reporting. The goal was to make the same underlying information understandable and consistent wherever it appeared.' },
      { title: 'Clearer payments and direct course navigation', body: 'Worked on grouping future payments separately in parent views, and taking learners directly to the course they selected. Both changes reduced ambiguity in everyday product use.' },
    ],
    lessons: ['A small UI issue can originate in routing, permissions or the data returned by an API.', 'Consistency across screens matters as much as the correctness of an individual component.', 'Production maintenance means tracing an issue through the interface, API and data layers.'],
    resources: [], note: 'This case study summarizes completed work items assigned to me and my CV. The product is no longer available publicly.',
  },
  'biblio-explorer': {
    intro: 'Turning a large bibliographic dataset into searchable, comparable research profiles.',
    context: 'A university team project integrating DBLP publication data with iCORE conference rankings and journal-ranking data. The ETL pipeline processes around 2.5 million publication records into a unified relational schema.',
    role: 'Team project · Data workflows, application development and testing',
    flow: ['DBLP & rankings', 'Python ETL', 'MySQL + Flask', 'JavaScript / D3.js'],
    flowCaption: 'Data is cleaned and matched before the dashboard exposes search, profiles and comparisons through REST endpoints.',
    approach: [
      { title: 'ETL and relational modeling', body: 'Cleaned and transformed publication records, modeled authors through many-to-many relationships, and matched venue names to ranking datasets. Publications without a venue match are retained so author and year analytics do not silently lose data.' },
      { title: 'APIs backed by analytical SQL', body: 'Flask Blueprints organize conference, journal, author and year endpoints. MySQL connection pooling and SQL views support the dashboard’s analytical queries.' },
      { title: 'Interactive exploration', body: 'JavaScript, HTML/CSS and D3.js power autocomplete search, year-range filters, profile tables and interactive multi-venue comparison charts.' },
      { title: 'Validation and continuous checks', body: 'The pytest suite covers API contracts, ETL behavior, venue matching and frontend layout. GitHub Actions runs pytest and flake8 checks; API rate limiting and environment-driven debug configuration support safer application behavior.' },
    ],
    lessons: ['Preserving unmatched records makes coverage limitations explicit instead of hiding them.', 'Database-level aggregation can keep an analytical frontend focused on presentation.', 'Testing data transformations is essential when a plausible-looking chart can still contain incorrect data.'],
    resources: [
      { label: 'Architecture & setup', href: 'https://github.com/fanostomp/Biblio-Explorer/blob/main/README.md' },
      { label: 'Automated tests', href: 'https://github.com/fanostomp/Biblio-Explorer/tree/main/tests' },
      { label: 'ETL pipeline', href: 'https://github.com/fanostomp/Biblio-Explorer/tree/main/etl' },
      { label: 'CI workflow', href: 'https://github.com/fanostomp/Biblio-Explorer/blob/main/.github/workflows/python-app.yml' },
    ],
  },
  'traineeship-management': {
    intro: 'Connecting placement, supervision and evaluation through role-based application workflows.',
    context: 'A university application built with Java 17, Spring Boot and MySQL. Different workflows support students, companies, professors and a traineeship committee.',
    role: 'Team project · Application development and controller/service testing',
    flow: ['Authentication', 'Role-based workflow', 'Matching & placement', 'Logbook & evaluation'],
    flowCaption: 'A functional overview of the application’s traineeship lifecycle.',
    approach: [
      { title: 'Authentication and role boundaries', body: 'Spring Security and role-specific controllers support different journeys after sign-in, keeping student, company, professor and committee interactions organized around their responsibilities.' },
      { title: 'Matching and assignment strategies', body: 'Service-layer search and supervisor-assignment strategies handle placement-related business rules. Factories keep strategy selection separate from the calling workflow.' },
      { title: 'Logbooks and evaluations', body: 'Students maintain logbooks and view evaluations, while company and professor workflows support supervision and assessment. MySQL-backed persistence connects these records to traineeships.' },
      { title: 'Behavior-focused tests', body: 'JUnit 5 and Mockito tests cover authentication controllers, role-specific controllers, services, position-search strategies and supervisor-assignment strategies.' },
    ],
    lessons: ['Role-based applications require thinking through entire user journeys.', 'Separating strategy selection from workflow code makes business rules easier to test.', 'Controller and service tests provide useful coverage for both web behavior and domain decisions.'],
    resources: [
      { label: 'Application source', href: 'https://github.com/fanostomp/Traineeship-Web/tree/master/src/main' },
      { label: 'JUnit & Mockito tests', href: 'https://github.com/fanostomp/Traineeship-Web/tree/master/src/test' },
      { label: 'Build configuration', href: 'https://github.com/fanostomp/Traineeship-Web/blob/master/pom.xml' },
    ],
  },
  'food-hazard-detection': {
    intro: 'Finding an effective text-classification pipeline for imbalanced food-recall data.',
    context: 'SemEval-2025 Task 9 requires predicting a hazard category and a product category from recall reports. The repository reports a final Subtask 1 score of 0.78003.',
    role: 'Machine-learning project · Feature engineering, experiments and evaluation',
    flow: ['Recall text', 'Word / char TF-IDF', 'LinearSVC', 'Hazard + product labels'],
    flowCaption: 'The final pipeline combines text features, title boosting and country information for classification.',
    approach: [
      { title: 'Start with an interpretable baseline', body: 'Established a TF-IDF and logistic-regression baseline before comparing stronger statistical and neural approaches.' },
      { title: 'Features suited to the domain', body: 'Combined word and character n-grams with title boosting. Country one-hot features were added to the product-category pipeline.' },
      { title: 'Compare approaches empirically', body: 'The tested LinearSVC pipelines outperformed the tested DistilBERT approach in this project. The reported scores progressed from 0.68695 for the baseline to 0.78003 for the final submission.' },
      { title: 'Document the evaluation setting', body: 'The final approach uses transductive TF-IDF: its vocabulary is fitted using training, validation and unlabeled test text. The reported competition score is specific to that evaluation setup.' },
    ],
    lessons: ['Model complexity does not automatically translate into better results.', 'Character features can capture useful variation in domain-specific vocabulary.', 'Feature engineering and an explicit evaluation setup are central to interpreting a result.'],
    resources: [
      { label: 'Results & architecture', href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/README.md' },
      { label: 'Experimental notebook', href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/Final_Project_Submission.ipynb' },
      { label: 'Written report', href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/Report.pdf' },
      { label: 'Implementation walkthrough', href: 'https://github.com/fanostomp/Food-Hazard-Detection-Challenge/blob/main/walkthrough.md' },
    ],
  },
  'greek-compiler': {
    intro: 'Taking Greek-language source code all the way to RISC-V assembly.',
    context: 'A university team project implementing a compiler for Greek++, an educational procedural language with Greek keywords, functions, procedures, control flow and parameter passing.',
    role: 'Team project · Compiler implementation',
    flow: ['Greek++ source', 'Lexer & parser', 'Quadruples + symbols', 'RISC-V assembly'],
    flowCaption: 'The compiler produces intermediate code, symbol-table output and final assembly files.',
    approach: [
      { title: 'Lexical and syntax analysis', body: 'Python lexical analysis recognizes identifiers, keywords, operators and nested comments. Recursive-descent parsing checks the grammar and works with symbol information for semantic checks.' },
      { title: 'Intermediate representation', body: 'Quadruples represent operations and control flow. Backpatching resolves branches, while temporary variables represent intermediate expression results.' },
      { title: 'Subprograms and final code', body: 'RISC-V code generation handles activation records, parameters and access to non-local variables. Functions and procedures support call-by-value and call-by-reference behavior.' },
    ],
    lessons: ['Intermediate representations make source-language behavior easier to translate systematically.', 'Subprograms connect parsing decisions to runtime stack-frame behavior.', 'Symbol tables and explicit output files make compiler debugging more inspectable.'],
    resources: [{ label: 'Language & compiler documentation', href: 'https://github.com/fanostomp/Compiler-MYY802/blob/main/README.md' }],
  },
};
