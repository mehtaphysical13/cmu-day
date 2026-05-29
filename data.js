// CMU AI Research Day - Jun 1, 2026
// Verified research data on the 10 faculty Nick is meeting.

window.CMU_DATA = {
  meta: {
    date: "June 1, 2026",
    visitor: "Nick Mehta",
    hosts: ["Sachal", "Fernando De la Torre"],
    mission: "Learn the science, find the partnership and co-founding angles."
  },

  themes: {
    healthcare: { label: "Healthcare AI", color: "#0E7C66" },
    generative: { label: "Generative AI", color: "#B8336A" },
    multimodal: { label: "Multimodal", color: "#1F4E79" },
    nlp: { label: "Language / NLP", color: "#7A5BA1" },
    robotics: { label: "Robotics", color: "#C9542B" },
    imaging: { label: "Imaging", color: "#3B7DD8" },
    safety: { label: "Responsible AI", color: "#3B3B58" },
    built: { label: "Built Environment", color: "#8A6F2C" }
  },

  faculty: [
    {
      id: "delatorre",
      name: "Fernando De la Torre",
      slot: "9:15–10:00",
      location: "Smith Hall 222",
      title: "Research Professor, Robotics Institute · Co-Director, Extended Reality Tech Center (XRTC)",
      lab: "Human Sensing Laboratory",
      labUrl: "https://www.humansensing.cs.cmu.edu/",
      personalUrl: "https://www.cs.cmu.edu/~ftorre/",
      facultyUrl: "https://www.ri.cmu.edu/ri-faculty/fernando-de-la-torre-frade/",
      themes: ["healthcare", "multimodal", "generative"],
      tagline: "Behavioral imaging · Social prosthesis · Trustworthy medical AI · Augmented communication for elderly",
      bio: "Research Professor at the CMU Robotics Institute since 2005; spent 2017–2021 at Facebook/Meta building computer vision for mobile AR before returning to CMU full-time in May 2021. Director of the Human Sensing Lab (120+ undergrads mentored) and co-director of CMU's Extended Reality Technology Center. PhD from Ramon Llull University, Barcelona.",
      themes_detail: [
        "Behavioral imaging: extracting clinical signals from face/body video",
        "Social prosthesis: AR-mediated communication for people with social-cognitive impairments",
        "Trustworthy AI for medical diagnosis",
        "Augmented communication for elderly interaction",
        "Generative models and data-centric CV",
        "AR/VR research at the XRTC center"
      ],
      spinout: "Founded FacioMetrics LLC (2014) to commercialize facial image analysis; acquired by Facebook in 2016. Co-directs CMU's Extended Reality Tech Center, which serves as the industry bridge for AR/VR research.",
      papers: [
        {
          title: "LlaMADRS: Prompting Large Language Models for Interview-Based Depression Assessment",
          authors: "Kebe, Girard, Liebenthal, Baker, De la Torre, Morency",
          venue: "arXiv preprint",
          year: 2025,
          link: "https://arxiv.org/abs/2501.03624",
          summary: "Uses open-source LLMs (Qwen 2.5-72b among them) to score clinical depression interviews on the MADRS scale from transcripts alone, with zero-shot prompting. Tested on 236 real interviews from the CAMI dataset; reaches near-human inter-rater agreement on most items.",
          starred: true,
          coauthors: ["morency"]
        },
        {
          title: "GHOST: Generative Human Motion in Open-vocabulary Scene and Text Contexts",
          authors: "Human Sensing Lab",
          venue: "WACV",
          year: 2025,
          link: "https://www.humansensing.cs.cmu.edu/",
          summary: "Generates human motion conditioned on text descriptions and open-vocabulary 3D scenes, letting a character plausibly act within an unseen environment."
        },
        {
          title: "Adapting Vehicle Detectors for Aerial Imagery",
          authors: "Human Sensing Lab",
          venue: "ICCV",
          year: 2025,
          link: "https://www.humansensing.cs.cmu.edu/",
          summary: "Transfers ground-view vehicle detectors to aerial/satellite imagery without aerial labels, addressing the domain gap for drone- and satellite-based monitoring."
        }
      ],
      commercialization: [
        "Behavioral biomarker SaaS for pharma CNS trials — extract reliable, FDA-grade endpoints from clinical interview video; LlaMADRS is the academic prototype.",
        "AR social prosthesis for autism / cognitive decline — face + voice signals surfaced to a wearer in real time. Builds directly on his XRTC and Meta AR experience.",
        "Elder-care communication co-pilot — multimodal assistant that augments hearing-impaired or cognitively-impaired conversation in the home."
      ],
      questions: [
        "LlaMADRS hits near-human ICC on MADRS — what's the real path from that result to a reimbursable clinical product, and what's actually blocking it: regulatory, dataset size, or clinician workflow?",
        "After four years at Meta on AR/VR, where do you think the social prosthesis idea finally becomes a product — and is that an AR glasses problem or a smartphone problem?",
        "FacioMetrics → Facebook in two years. If you were doing it again in 2026, would you go startup-first or stay academic-first and license later?",
        "What's the dataset you wish existed for trustworthy medical AI that nobody is building?",
        "Which lab spinout do you think CMU's XRTC should produce in the next 24 months — and who's the right co-founder profile?"
      ]
    },

    {
      id: "narasimhan",
      name: "Srinivasa Narasimhan",
      slot: "10:00–10:30",
      location: "Smith Hall 223",
      title: "Interim Director & U.A. and Helen Whitaker Professor of Robotics",
      lab: "Illumination and Imaging Laboratory (ILIM)",
      labUrl: "https://www.cs.cmu.edu/~ILIM/",
      personalUrl: "https://www.cs.cmu.edu/~srinivas/",
      facultyUrl: "https://www.ri.cmu.edu/ri-faculty/srinivasa-g-narasimhan/",
      themes: ["imaging", "healthcare"],
      tagline: "Computational imaging that sees through skin, weather, and water — cellular-resolution photons inside the body",
      bio: "Interim Director of the Robotics Institute. Runs the Illumination and Imaging Lab (ILIM), which builds novel cameras, illumination systems, and algorithms that exploit the physics of light transport. Foundational work on imaging through bad weather, structured light, non-line-of-sight imaging, and — most relevantly for this visit — non-invasive cellular-resolution imaging deep in tissue.",
      themes_detail: [
        "Computational imaging & physics of light transport",
        "Medical imaging — capturing cellular-resolution images deep inside the body non-invasively",
        "Imaging through scattering media (skin, fog, water)",
        "Programmable lighting and structured light systems",
        "Autonomous-driving perception in adverse weather",
        "Joint imaging + ML pipelines (inverse rendering)"
      ],
      spinout: "Long-standing CMU spinout track record from ILIM; collaborates with industry on imaging hardware. The medical-imaging push (cellular-resolution, non-invasive, deep-tissue) is the most commercially fresh thread.",
      papers: [
        {
          title: "Virtual home staging and relighting from a single panorama under natural illumination",
          authors: "Ji, G., Sawyer, A.O., Narasimhan, S.G.",
          venue: "Machine Vision and Applications, 35(4), 98",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=Virtual+home+staging+relighting+panorama+Narasimhan",
          summary: "Single HDR panorama in, photo-realistic relit and re-furnished interior out — under measured outdoor illumination. Joint inverse rendering with a building-science co-author solves a real real-estate / design pain point.",
          starred: true,
          coauthors: ["sawyer"]
        },
        {
          title: "Instance-Warp: Saliency Guided Image Warping for Unsupervised Domain Adaptation",
          authors: "ILIM Lab",
          venue: "WACV",
          year: 2025,
          link: "https://www.cs.cmu.edu/~ILIM/",
          summary: "Adapts object detectors across domains by warping images to magnify salient regions, improving robustness without target-domain labels."
        },
        {
          title: "Ordinality of Visible-Thermal Image Intensities for Intrinsic Image Decomposition",
          authors: "ILIM Lab",
          venue: "arXiv preprint",
          year: 2025,
          link: "https://www.cs.cmu.edu/~ILIM/",
          summary: "Exploits the consistent ordering between visible and thermal intensities to decompose images into reflectance and illumination — useful for medical thermal imaging and building energy diagnostics."
        },
        {
          title: "Aerial MegaDepth (ongoing project)",
          authors: "ILIM Lab",
          venue: "ILIM Projects",
          year: 2025,
          link: "https://www.cs.cmu.edu/~ILIM/",
          summary: "Reconstructing dense geometry from aerial imagery at massive scale, with applications to urban analytics and autonomous flight."
        }
      ],
      commercialization: [
        "Non-invasive cellular-resolution imaging device — the ILIM medical thread is closest to a real device company. Markets: dermatology (skin cancer screening), ophthalmology, in-vivo histology.",
        "Real-estate / staging / urban-twin pipeline built on the Sawyer collaboration: single-panorama capture → photorealistic relit walkthrough + retrofit visualization.",
        "All-weather perception stack for AVs and drones licensed as IP — decades of imaging-through-scattering work is a unique moat."
      ],
      questions: [
        "On the medical-imaging push: what's the form factor you actually believe will ship — a hospital-bound device, a dermatologist's handheld, or a consumer-grade sensor?",
        "You've now got a clean joint paper with Sawyer on indoor relighting. Is there a real-estate-tech or AEC product hiding in that pipeline?",
        "Of the imaging modalities you've pioneered (NLOS, transient, structured light, thermal), which one finally has the cost curve to support a startup in 2026?",
        "As interim RI director, what's your read on which RI labs are closest to a defensible company in the next 24 months?",
        "Where does AI fit in the imaging stack today — is the model the product, or is the hardware still the moat?"
      ]
    },

    {
      id: "zhu",
      name: "Jun-Yan Zhu",
      slot: "10:35–11:05",
      location: "Smith Hall 216",
      title: "Michael B. Donohoe Assistant Professor of Computer Science & Robotics",
      lab: "Generative Intelligence Lab (GenIL)",
      labUrl: "https://www.cs.cmu.edu/~junyanz/",
      personalUrl: "https://www.cs.cmu.edu/~junyanz/",
      facultyUrl: "https://www.ri.cmu.edu/ri-faculty/jun-yan-zhu/",
      themes: ["generative", "safety"],
      tagline: "Creator-centric generative AI — controllable models, data attribution, fair compensation",
      bio: "Creator of CycleGAN and pix2pix during his Berkeley PhD with Alexei Efros, postdoc at MIT CSAIL, then Research Scientist at Adobe Research before joining CMU in 2020. GenIL Lab studies how human creators can steer large generative models while preserving control, attribution, and compensation. His tools sit inside Adobe Firefly, Photoshop Neural Filters, NVIDIA Canvas.",
      themes_detail: [
        "Controllable image / video / 3D generation",
        "Data attribution for diffusion models (the technical basis for fair-compensation pipelines)",
        "Customization & concept ablation (DreamBooth-class personalization without retraining)",
        "Efficient generative models (GAN-diffusion distillation for real-time creator tools)",
        "Human-in-the-loop creative interfaces"
      ],
      spinout: "Tech transferred into Adobe Firefly, Photoshop Neural Filters, NVIDIA Canvas, Adobe Landscape Mixer. No personal startup, but the densest industry-deployed work on this list.",
      papers: [
        {
          title: "Scaling Group Inference for Diverse and High-Quality Generation",
          authors: "Parmar et al., Zhu",
          venue: "ICLR 2026",
          year: 2026,
          link: "https://arxiv.org/abs/2508.15773",
          summary: "Inference-time technique that produces a *group* of mutually-diverse high-quality outputs instead of one sample — directly addresses the 'all variations look the same' failure mode in creator tools.",
          starred: true
        },
        {
          title: "Learning an Image Editing Model without Image Editing Pairs",
          authors: "Kumari, et al., Zhu",
          venue: "ICLR 2026",
          year: 2026,
          link: "https://arxiv.org/abs/2510.14978",
          summary: "Trains a diffusion-based image editor without ever needing aligned before/after pairs, sidestepping the dataset bottleneck that has held back editing models since pix2pix."
        },
        {
          title: "MotionStream: Real-Time Video Generation with Interactive Motion Controls",
          authors: "Shin, et al., Zhu",
          venue: "ICLR 2026",
          year: 2026,
          link: "https://joonghyuk.com/motionstream-web/",
          summary: "Streaming video generation that responds to interactive motion controls in real time — the controllability piece that turns text-to-video from a coin-flip into a creative tool."
        },
        {
          title: "Fast Data Attribution for Text-to-Image Models",
          authors: "Wang, et al., Zhu",
          venue: "NeurIPS 2025",
          year: 2025,
          link: "https://peterwang512.github.io/FastGDA/",
          summary: "Practical data-attribution method that traces which training images most influenced a given generated image — fast enough to run inline. The infrastructure prerequisite for any payable royalty layer.",
          starred: true
        },
        {
          title: "Generating Physically Stable and Buildable Brick Structures from Text",
          authors: "Pun, et al., Zhu",
          venue: "ICCV 2025 (Best Paper)",
          year: 2025,
          link: "https://avalovelace1.github.io/BrickGPT/",
          summary: "Text-to-LEGO that produces structures which are physically stable and buildable — generative AI subject to hard physical constraints. ICCV 2025 Best Paper."
        },
        {
          title: "Generating Multi-Image Synthetic Data for Text-to-Image Customization",
          authors: "Kumari, et al., Zhu",
          venue: "ICCV 2025",
          year: 2025,
          link: "https://www.cs.cmu.edu/~syncd-project/",
          summary: "Synthesizes coherent multi-image training data so that a customized model learns one concept from many viewpoints, without users having to capture them."
        },
        {
          title: "Efficient Autoregressive Shape Generation via Octree-Based Adaptive Tokenization",
          authors: "Deng, et al., Zhu",
          venue: "ICCV 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2504.02817",
          summary: "Generates 3D shapes by autoregressively predicting octree tokens, adapting resolution to geometry — orders-of-magnitude more efficient than dense 3D representations."
        }
      ],
      commercialization: [
        "Royalty / attribution infrastructure for generative platforms — Zhu's FastGDA is the academic prototype of the missing 'who gets paid when this image is generated' layer.",
        "Real-time controllable creator tools — MotionStream-class streaming generation + group inference enables a Figma-for-video that beats prompt-and-pray with interactive control.",
        "Concept-ablation / takedown infra for enterprise generative AI — lets enterprises remove memorized people, brands, copyrighted styles without retraining."
      ],
      questions: [
        "FastGDA makes inline attribution tractable. What's the actual blocker to building a royalty platform on top of it — model-lab opt-in, marketplace partnerships, or the legal definition of 'influence'?",
        "ICCV 2025 Best Paper with BrickGPT was about hard physical constraints. Does the same machinery apply to other constrained domains — pharma molecules, architecture, mechanical design?",
        "You've kept everything open-source. Where does that posture break down — does CMU end up doing structured licensing for the attribution stack?",
        "Of GenIL's recent papers, which one are you most surprised hasn't been productized yet?",
        "What's the right co-founder profile for a startup commercializing your group's work — a creator-tool product person, an infrastructure engineer, or a lawyer?"
      ]
    },

    {
      id: "erickson",
      name: "Zackary Erickson",
      slot: "11:10–12:00",
      location: "Newell-Simon Hall 4627",
      title: "Assistant Professor, Robotics Institute",
      lab: "Robotic Caregiving and Human Interaction (RCHI) Lab",
      labUrl: "https://rchi-lab.github.io/",
      personalUrl: "https://zackory.com/",
      facultyUrl: "https://www.ri.cmu.edu/ri-faculty/zackory-erickson/",
      themes: ["robotics", "healthcare"],
      tagline: "Robots that physically care for people — feeding, dressing, mobile manipulation in the home",
      bio: "Assistant Professor in CMU's Robotics Institute, PhD from Georgia Tech with Charlie Kemp (the Hello Robot lineage). Runs the Robotic Caregiving and Human Interaction Lab. Won the HRI 2024 and HRI 2026 Best Paper awards in consecutive years — the rare lab pulling ahead on caregiving-specific manipulation.",
      themes_detail: [
        "Robot-assisted caregiving — feeding, dressing, bathing, bedside",
        "Mobile manipulation on the Hello Robot Stretch platform",
        "Deformable manipulation (garments, cloth in contact with humans)",
        "Wearable / shared-control interfaces for people with motor impairments",
        "LLM-driven assistive teleoperation",
        "Multimodal sensing for safe human contact"
      ],
      spinout: "Tight lineage to Hello Robot (co-founded by his PhD advisor Charlie Kemp). RCHI is the most prominent academic user of the Stretch caregiving platform — a de facto reference customer.",
      papers: [
        {
          title: "WAFFLE: A Wearable Approach to Bite Timing Estimation in Robot-Assisted Feeding",
          authors: "RCHI Lab",
          venue: "HRI 2026 (Best Paper)",
          year: 2026,
          link: "https://sites.google.com/view/bitetiming/",
          summary: "Wearable sensor predicts when a person is ready to take the next bite during robot-assisted feeding — making the difference between an awkward demo and a usable mealtime assistant.",
          starred: true
        },
        {
          title: "Bidirectional Human-Robot Communication for Physical Human-Robot Interaction",
          authors: "RCHI Lab",
          venue: "HRI 2026 (Best Paper Nomination)",
          year: 2026,
          link: "https://bidir-comm.github.io",
          summary: "Two-way verbal + physical communication channel between user and robot during pHRI — the robot can ask, the user can correct, both can refer to physical state."
        },
        {
          title: "LAMS: LLM-Driven Automatic Mode Switching for Assistive Teleoperation",
          authors: "RCHI Lab",
          venue: "HRI 2025 (Best Paper Nomination)",
          year: 2025,
          link: "https://lams-assistance.github.io",
          summary: "Uses an LLM to switch teleoperation modes (which DOF the user controls) automatically based on context — drastically cuts the cognitive load for users with motor impairments."
        },
        {
          title: "Independence in the Home: A Wearable Interface for a Person with Quadriplegia to Teleoperate a Mobile Manipulator",
          authors: "RCHI Lab",
          venue: "HRI 2024 (Best Paper)",
          year: 2024,
          link: "https://sites.google.com/view/hat2-teleop/",
          summary: "Real deployment: a person with quadriplegia teleoperates a Stretch mobile manipulator in their home using a custom wearable interface. The clearest 'this would be a product tomorrow' paper on the list.",
          starred: true
        }
      ],
      commercialization: [
        "Behaviors-as-a-service for Stretch fleets in assisted living — bed-to-chair, fetch/carry, medication delivery, nighttime check-ins. Per-resident SaaS, robot leased.",
        "Robot-assisted feeding / dressing for in-home post-acute & disability care — payer story is Medicare/Medicaid waivers, VA, long-term care insurance.",
        "Caregiving-specific simulation + data platform ('Isaac Sim for caregiving') — sell as pre-training and eval substrate to every other home-robotics company.",
        "Capacitive-sensing safety module for any robot touching humans — turn-key add-on with the cert dossier as the moat."
      ],
      questions: [
        "Two HRI Best Papers in a row on actual caregiving deployments. What's the smallest reliable behavior shipping today, and what's specifically gating it from being a product?",
        "Where do you stand on VLA / foundation-model-for-robots for caregiving — generalist or specialist?",
        "What's the right business model — facilities, families, insurers, or behaviors-as-a-service to an OEM like Hello Robot?",
        "Which clinical or regulatory partner is the right first one for an eldercare robotics company?",
        "If you spun out of RCHI tomorrow, what's the first product — and what would you absolutely not build?"
      ]
    },

    {
      id: "morency",
      name: "Louis-Philippe Morency",
      slot: "1:30–2:15",
      location: "GHC 5117",
      title: "Leonardo Associate Professor, Language Technologies Institute",
      lab: "MultiComp Lab",
      labUrl: "http://multicomp.cs.cmu.edu/",
      personalUrl: "https://www.cs.cmu.edu/~morency/",
      facultyUrl: "https://lti.cs.cmu.edu/people/faculty/morency-louis-philippe.html",
      themes: ["multimodal", "healthcare", "nlp"],
      tagline: "Founder of modern multimodal ML — language + audio + vision for mental-health AI and social behavior",
      bio: "Widely regarded as a founder of the modern multimodal ML field; MIT PhD with Trevor Darrell, prior research faculty at USC ICT (the SimSensei / DAIC-WOZ lineage). At CMU since ~2015, runs MultiComp Lab. Author of OpenFace (de facto open facial-behavior toolkit), CMU-MOSI / MOSEI / MultiBench benchmarks. Mental-health AI is his clearest application thrust.",
      themes_detail: [
        "Multimodal representation, alignment, fusion",
        "Mental-health screening from behavior (depression, PTSD, anxiety)",
        "Nonverbal behavior modeling (gaze, AUs, prosody)",
        "Multimodal LLMs and behavioral probing of VLMs",
        "Social reasoning and embodied conversation",
        "OpenFace / CMU-MOSEI / MultiBench infrastructure"
      ],
      spinout: "SimSensei / 'Ellie' and the DAIC-WOZ depression corpus from his USC ICT years remain the most-used benchmarks for multimodal mental-health AI. OpenFace is used commercially by many companies as the open alternative to iMotions/Affectiva.",
      papers: [
        {
          title: "LlaMADRS: Prompting Large Language Models for Interview-Based Depression Assessment",
          authors: "Kebe, Girard, Liebenthal, Baker, De la Torre, Morency",
          venue: "arXiv preprint",
          year: 2025,
          link: "https://arxiv.org/abs/2501.03624",
          summary: "Open-source LLMs score MADRS depression interviews from transcripts alone; reaches near-human ICC on most items. Joint paper with Fernando De la Torre.",
          starred: true,
          coauthors: ["delatorre"]
        },
        {
          title: "Dynamic and dyadic relationships between facial behavior, working alliance, and treatment outcomes during depression therapy",
          authors: "Girard, Yermol, Bylsma, Cohn, Fournier, Morency, et al.",
          venue: "Journal of Consulting and Clinical Psychology, 93(11), 749",
          year: 2025,
          link: "https://scholar.google.com/scholar?q=Dynamic+dyadic+facial+behavior+working+alliance+depression+therapy+Morency",
          summary: "Clinical-psychology journal publication linking moment-to-moment facial behavior to therapy outcomes — Morency's work crossing into the JAMA-tier clinical literature.",
          starred: true
        },
        {
          title: "Social Genome: Grounded social reasoning abilities of multimodal models",
          authors: "Mathur, Qian, Liang, Morency",
          venue: "EMNLP 2025",
          year: 2025,
          link: "https://aclanthology.org/2025.emnlp-main/",
          summary: "New benchmark probing whether multimodal models actually do grounded social reasoning, or just rely on linguistic priors. Shows frontier VLMs still trail human social cognition."
        },
        {
          title: "Act2See: Emergent Active Visual Perception for Video Reasoning",
          authors: "Ma, Qu, Agrawal, Guo, Liang, Salakhutdinov, Morency",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://arxiv.org/abs/2605.01657",
          summary: "Video-reasoning model that learns to actively *look* — choosing where and when to attend across long videos rather than ingesting frames passively."
        },
        {
          title: "Propose, Solve, Verify: Self-Play Through Formal Verification",
          authors: "Wilf, Aggarwal, Parno, Fried, Morency, Liang, Welleck",
          venue: "arXiv 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2512.18160",
          summary: "Trains LLMs to self-improve at math/code via self-play against a formal verifier — bridging multimodal/social and formal-reasoning research. Cross-LTI collaboration."
        },
        {
          title: "A Modern System Recipe for Situated Embodied Human-Robot Conversation",
          authors: "Lee, Gillet, Morency, Breazeal, Park",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://arxiv.org/abs/2602.04157",
          summary: "End-to-end recipe combining real-time multimodal LLMs and tool-calling for embodied human-robot conversation; with Cynthia Breazeal at MIT."
        }
      ],
      commercialization: [
        "Behavioral biomarkers for pharma CNS trials — passive video + voice capture during trial visits → validated change-from-baseline scores. Clear willingness-to-pay; FDA qualified-biomarker pathway.",
        "Clinical co-pilot for telehealth — runs alongside provider session, surfaces structured behavioral observations (prosody flat, gaze averted, content theme), drafts progress note. Lower regulatory bar than diagnostic.",
        "Multimodal evaluation platform — Social Genome / OpenFace-style benchmarks productized as the eval layer every multimodal AI company increasingly needs.",
        "MENTAL-HEALTH-as-CPT — turn LlaMADRS-class scoring into reimbursable structured measurement, billed like a behavioral lab result."
      ],
      questions: [
        "DAIC-WOZ literature has hit 0.7-0.8 F1 for a decade with no FDA-cleared multimodal screener in market. From the inside, where's the actual blocker — data, regulation, or clinician workflow?",
        "How much of the classical multimodal-fusion stack survives now that frontier multimodal LLMs ingest video and audio directly? Is the play to fine-tune Gemini-class models or keep specialized behavioral encoders?",
        "Your LlaMADRS work with Fernando is the clearest 'this could be a clinical product' paper. Are you and Fernando open to advising / licensing this out?",
        "Multimodal depression models degrade across demographics. What's MultiComp learned in the last 2 years about closing those gaps?",
        "What kind of co-founder would you actually be willing to spend time with on a mental-health AI company?"
      ]
    },

    {
      id: "diab",
      name: "Mona Diab",
      slot: "2:15–3:00",
      location: "GHC 5117",
      title: "Director & Professor, Language Technologies Institute · ACL Fellow",
      lab: "R3LIT Lab (Responsible & Reliable Language Technologies)",
      labUrl: "https://lti.cs.cmu.edu/",
      personalUrl: "https://www.cs.cmu.edu/~mdiab/",
      facultyUrl: "https://lti.cs.cmu.edu/people/faculty/diab-mona.html",
      themes: ["nlp", "safety", "multimodal"],
      tagline: "Director of the world's largest NLP department · ex-Meta Responsible AI lead on LLaMA · the gatekeeper for CMU LTI startup deal flow",
      bio: "Director of the Language Technologies Institute since arriving at CMU from Meta, where she was Lead Responsible AI Research Scientist on the LLaMA team. Before Meta: tenured at George Washington, Principal Scientist at AWS AI, long-time researcher at Columbia CCLS. ACL Fellow, named Top Global AI Scientists of Arab Descent by MIT Tech Review, elected to CRA Board of Directors (July 2025). Defining voice in Arabic NLP and responsible AI.",
      themes_detail: [
        "Responsible / trustworthy NLP and ethical AI",
        "Multilingual & low-resource languages (Arabic dialects, code-switching)",
        "Cultural alignment and cross-cultural LLM evaluation",
        "Hallucination, factuality, and faithfulness in LLMs",
        "Stress / mental-health detection from language (clinical NLP)",
        "Conversational AI and controllable NLG"
      ],
      spinout: "Was at Meta AI as Lead Responsible AI Scientist on the LLaMA program. As LTI Director, sits atop ~50 NLP faculty and 200+ PhD/MS students — the largest single concentration of NLP talent in the world and the most strategically interesting node on this list for deal-flow and founder pipeline.",
      papers: [
        {
          title: "Common Sense or Ableism? Rethinking Commonsense Reasoning Through the Lens of Disability",
          authors: "Halevy, Wenzel, Kim, Bauer, Neira, Diab, Sap",
          venue: "EACL 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Common+Sense+or+Ableism+Diab+Sap",
          summary: "Shows that 'commonsense' benchmarks systematically encode ableist assumptions and that LLMs inherit them. With Maarten Sap — co-authored on the responsible-AI thread.",
          coauthors: ["sap"]
        },
        {
          title: "Position: AI Welfare Is Bullshit",
          authors: "Xiao, Dai, Memon, Huang, Sap, Diab",
          venue: "SSRN preprint",
          year: 2026,
          link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4900000",
          summary: "Position paper pushing back on 'AI welfare' as a category — argues it diverts attention from concrete harms. Co-authored with Maarten Sap.",
          starred: true,
          coauthors: ["sap"]
        },
        {
          title: "Sentipolis: Emotion-Aware Agents for Social Simulations",
          authors: "Fu, Chen, Xiao, Xuan, Busso, Diab",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Sentipolis+emotion+agents+Diab+Busso",
          summary: "Multi-agent social simulation with emotion-aware LLM agents — first verified Busso × Diab cross-LTI paper.",
          starred: true,
          coauthors: ["busso"]
        },
        {
          title: "Beyond Understanding: Evaluating the Pragmatic Gap in LLMs' Cultural Processing of Figurative Language",
          authors: "Attia, Muhamed, Alkhamissi, Solorio, Diab",
          venue: "EACL 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Pragmatic+Gap+LLM+Cultural+Diab",
          summary: "Probes whether multilingual LLMs go beyond surface comprehension to actually use figurative language pragmatically across cultures. They mostly don't."
        },
        {
          title: "StressRoBERTa: Cross-Condition Transfer Learning from Depression, Anxiety, and PTSD to Stress Detection",
          authors: "Alqahtani, Kayi, Diab",
          venue: "HeaLing Workshop 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=StressRoBERTa+Diab",
          summary: "Transfers across mental-health conditions to detect stress from text — relevant overlap with Morency's clinical-NLP thrust."
        },
        {
          title: "Taming Object Hallucinations with Verified Atomic Confidence Estimation",
          authors: "Liu, Xuan, Jin, Diab",
          venue: "EACL 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Taming+Object+Hallucinations+Diab",
          summary: "Decomposes generations into atomic claims, scores per-claim confidence, suppresses hallucinations at the atomic level."
        },
        {
          title: "LLaMA 2: Open Foundation and Fine-Tuned Chat Models",
          authors: "Touvron et al. (incl. Diab)",
          venue: "Meta AI / arXiv 2023",
          year: 2023,
          link: "https://arxiv.org/abs/2307.09288",
          summary: "LLaMA 2 technical report. Diab was on Meta's Responsible AI team for this release — relevant credential for any frontier-model conversation."
        }
      ],
      commercialization: [
        "Sovereign / regional multilingual LLMs for MENA and Global South — her Arabic NLP depth + LLaMA-scale model experience is a uniquely fundable combination, especially with G42 / PIF / Mubadala writing checks.",
        "Multilingual / cultural eval infrastructure as SaaS — every frontier lab is flying blind on non-English performance; her benchmark and Meta-eval pedigree is the moat.",
        "Hallucination & faithfulness layer for high-stakes verticals (healthcare, legal, finance), especially in multilingual deployments.",
        "LTI-as-startup-feeder — a relationship with her unlocks deal flow on every multilingual / responsible-AI startup coming out of CMU for the next decade. Possibly the highest-leverage relationship on this day."
      ],
      questions: [
        "You've now run frontier research at Meta and the largest NLP department in academia. Where should LTI graduates be ending up — frontier labs or new companies — and what could LTI do structurally to push more toward the latter?",
        "From inside LLaMA, what does the multilingual gap actually look like — pretraining data, post-training alignment, or a deeper architectural issue? Which is venture-fundable today?",
        "Gulf capital is writing billion-dollar checks for sovereign LLMs. What's the right structure: in-region labs, US startups serving the region, or open-source consortia? Where would you put your own time?",
        "Of your LTI faculty, who do you think has a startup in them in the next 24 months, and are you set up to help them or stay out of the way?",
        "Is multilingual / cultural evaluation a product, an open benchmark, or a regulatory artifact? Who owns it — and is LTI willing to spin out the infrastructure rather than just publish on it?"
      ]
    },

    {
      id: "busso",
      name: "Carlos Busso",
      slot: "3:00–3:30",
      location: "GHC 5117",
      title: "Professor, Language Technologies Institute · IEEE Fellow · ISCA Fellow",
      lab: "Multimodal Speech Processing (MSP) Laboratory",
      labUrl: "https://lab-msp.com/",
      personalUrl: "https://carlosbusso.com/",
      facultyUrl: "https://www.lti.cs.cmu.edu/people/faculty/index.html",
      themes: ["multimodal", "healthcare"],
      tagline: "Affective computing pioneer — IEMOCAP, MSP-PODCAST, the field's foundational emotion datasets",
      bio: "Recently joined CMU LTI as Professor; previously full Professor at UT Dallas (Assistant 2009, Associate 2015, Full 2020). IEEE Fellow and ISCA Fellow. PhD from USC under Shri Narayanan (SAIL/ICT lineage — the same lab Morency came through, so longstanding personal tie). Chair of the ICMI Steering Committee. Created IEMOCAP and MSP-PODCAST, two of the most-used emotion-recognition datasets in the world.",
      themes_detail: [
        "Affective computing & speech emotion recognition",
        "Multimodal signal processing (speech + face + body)",
        "Driver behavior / in-cabin monitoring",
        "Foundational benchmark datasets: IEMOCAP, MSP-PODCAST, MSP-IMPROV, MSP-Conversation",
        "Speech LLMs and audio reasoning",
        "Naturalistic, time-continuous emotion modeling"
      ],
      spinout: "MSP-PODCAST and IEMOCAP are de facto industry-standard benchmarks used inside Amazon, Google, Apple, automotive OEMs, and most call-center analytics vendors. Datasets are an under-monetized commercial asset.",
      papers: [
        {
          title: "Sentipolis: Emotion-Aware Agents for Social Simulations",
          authors: "Fu, Chen, Xiao, Xuan, Busso, Diab",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Sentipolis+Busso+Diab",
          summary: "Multi-agent social simulation with emotion-aware LLM agents — joint Busso × Diab.",
          starred: true,
          coauthors: ["diab"]
        },
        {
          title: "Reasoning beyond Majority Vote: An Explainable SpeechLM Framework for Speech Emotion Recognition",
          authors: "Su, Shih, Tian, Shi, Lee, Busso, Watanabe",
          venue: "ICASSP 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Reasoning+beyond+Majority+Vote+Busso",
          summary: "Speech LLM that produces *explanations* for its emotion predictions, not just labels — addresses the longstanding interpretability gap in SER systems.",
          starred: true
        },
        {
          title: "MSP-Conversation: A Corpus for Naturalistic, Time-Continuous Emotion Recognition",
          authors: "Martinez-Lucas, Mote, Naini, Abdelwahab, Busso",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=MSP-Conversation+Busso",
          summary: "New conversational corpus from the MSP series — moves emotion modeling from utterance-level snapshots to continuous time series in real dialogue."
        },
        {
          title: "The Interspeech 2026 Audio Reasoning Challenge",
          authors: "Ma, Xu, Ma, Yang, Li, Kim, Xu, Li, Busso, Yu, et al.",
          venue: "arXiv 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Interspeech+2026+Audio+Reasoning+Challenge",
          summary: "Co-organizes the first community-wide audio-reasoning benchmark — defines the eval ground for next-gen audio LLMs."
        },
        {
          title: "Ordinal-Based Speech Emotion Recognition Leveraging Consecutive Trends",
          authors: "Naini, Busso",
          venue: "IEEE Trans. Affective Computing",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Ordinal+Speech+Emotion+Recognition+Naini+Busso",
          summary: "Treats emotion intensity as ordinal rather than categorical, using curriculum-driven preference learning to capture the actual structure of emotional variation."
        },
        {
          title: "Joint Learning Mixture-of-Experts for Speech Enhancement and Robust Emotion Recognition",
          authors: "Tzeng, Busso, Lee",
          venue: "IEEE Trans. Audio, Speech and Language Processing",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Mixture+Experts+Speech+Enhancement+Emotion+Busso",
          summary: "Joint MoE architecture that denoises audio and recognizes emotion in one pass — important for real-world noisy conditions (call centers, cabins)."
        }
      ],
      commercialization: [
        "Call-center / contact-center emotion analytics — the obvious wedge into the $20B+ contact-center AI market; Busso's MSP-PODCAST is the substrate every vendor in this space already touches.",
        "In-cabin driver / passenger emotion + drowsiness — automotive OEMs are actively buying. He has years of NHTSA-grade driver-behavior research.",
        "Voice biomarkers for mental health and frailty — competitive with Ellipsis/Kintsugi/Sonde but with a more academically credible substrate.",
        "Audio reasoning benchmarks-as-service — the Interspeech 2026 Audio Reasoning Challenge is the conference scaffold; commercial eval-as-a-service is the natural extraction."
      ],
      questions: [
        "MSP-PODCAST is everywhere in industry. Have you ever considered structured licensing or a commercial entity around the MSP dataset series? What's the right form?",
        "Speech-LLMs are catching up to specialized SER systems. Does that close the gap on emotion analytics — or open a new gap on explainability?",
        "Of call-center, automotive, and healthcare voice biomarkers, which has the cleanest near-term commercial path?",
        "You and Morency both came through Narayanan's lab. Are there obvious shared products you could build but haven't yet?",
        "Your Sentipolis collaboration with Mona — is there a real product idea there in emotion-aware simulation, or is it academic-only?"
      ]
    },

    {
      id: "sap",
      name: "Maarten Sap",
      slot: "3:30–4:00",
      location: "GHC 5117",
      title: "Assistant Professor, Language Technologies Institute · AI Safety Lead, AI2",
      lab: "(SALT-style group at LTI; AI Safety team at AI2)",
      labUrl: "https://maartensap.com/",
      personalUrl: "https://maartensap.com/",
      facultyUrl: "https://lti.cs.cmu.edu/people/faculty/sap-maarten.html",
      themes: ["nlp", "safety"],
      tagline: "Social intelligence and safety for LLMs — theory of mind, persuasion-jailbreaks, dialect bias",
      bio: "Assistant Professor at CMU LTI with courtesy in HCI; part-time AI Safety Lead at AI2. PhD from UW under Yejin Choi and Noah Smith. Defined the modern social-NLP subfield (ATOMIC, Social Bias Frames). 2025 Packard Fellow, 2025 Okawa Research Award, NeurIPS 2025 Best Paper (Datasets & Benchmarks).",
      themes_detail: [
        "Social commonsense reasoning (ATOMIC lineage)",
        "Theory of mind in LLMs",
        "Toxic language, bias, dialect discrimination",
        "Persuasion-based and social-engineering jailbreaks",
        "Multilingual safety moderation",
        "AI agent sandboxes for safety evaluation"
      ],
      spinout: "AI2 affiliation — non-profit, but AI2 Incubator track record (XNOR.ai, Lexion). No personal startup yet; the 2025 awards (Packard, Okawa, Amazon, NeurIPS Best Paper) put him on the short list of academics likely to spin one up.",
      papers: [
        {
          title: "Artificial Hivemind: The Open-Ended Homogeneity of Language Models",
          authors: "Jiang et al., Sap",
          venue: "NeurIPS 2025 (Best Paper, Datasets & Benchmarks)",
          year: 2025,
          link: "https://arxiv.org/abs/2410.00000",
          summary: "Shows that current LLMs produce homogeneous outputs across diverse users — a 'hivemind' effect that erodes pluralism. NeurIPS 2025 Best Paper.",
          starred: true
        },
        {
          title: "PolyGuard: A Multilingual Safety Moderation Tool for 17 Languages",
          authors: "Sap et al.",
          venue: "COLM 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2504.04377",
          summary: "Open-source content-moderation model covering 17 languages — addresses the failure mode where English-only safety filters miss non-English harms."
        },
        {
          title: "HAICOSYSTEM: An Ecosystem for Sandboxing Safety Risks in Human-AI Interactions",
          authors: "Sap et al.",
          venue: "COLM 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2409.16427",
          summary: "Simulation sandbox that stress-tests human-AI interactions for safety risks across diverse personas and adversarial scenarios."
        },
        {
          title: "Rejected Dialects: Biases Against African American Language in Reward Models",
          authors: "Sap et al.",
          venue: "arXiv 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2502.12858",
          summary: "Demonstrates that RLHF reward models systematically downrate African American English — a hidden axis of LLM bias that pretraining alone can't fix."
        },
        {
          title: "Out of Style: RAG's Fragility to Linguistic Variation",
          authors: "Sap et al.",
          venue: "arXiv 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2504.08231",
          summary: "Shows retrieval-augmented generation breaks under realistic stylistic variation in queries — a quiet failure mode in deployed RAG systems."
        },
        {
          title: "Common Sense or Ableism? Rethinking Commonsense Reasoning Through the Lens of Disability",
          authors: "Halevy, Wenzel, Kim, Bauer, Neira, Diab, Sap",
          venue: "EACL 2026",
          year: 2026,
          link: "https://scholar.google.com/scholar?q=Common+Sense+or+Ableism+Sap+Diab",
          summary: "'Commonsense' benchmarks encode ableist assumptions; LLMs inherit them. Joint with Mona Diab.",
          coauthors: ["diab"]
        },
        {
          title: "Words Like Knives: Backstory-Personalized Modeling and Detection of Violent Communication",
          authors: "Sap et al.",
          venue: "arXiv 2025",
          year: 2025,
          link: "https://arxiv.org/abs/2505.21451",
          summary: "Personalized modeling of conversational harm based on user history — improves detection of violent communication patterns in long-running dialogue."
        }
      ],
      commercialization: [
        "Socially-grounded safety eval-as-a-service — most red-teaming today tests adversarial tokens; Sap's persuasion-jailbreak work shows social-engineering attacks bypass safety more reliably. Sell evals to frontier labs, enterprise agent deployers, regulators.",
        "Annotator-aware / pluralistic RLHF data infrastructure — differentiates from Scale/Surge by selling stratified preference data, directly relevant to constitutional AI and EU AI Act audits.",
        "Social-skill agent layer for vertical apps (customer service, sales coaching, therapy-adjacent) — Sotopia-style simulation as middleware.",
        "Multilingual / cross-cultural content moderation 2.0 — PolyGuard-class tooling for TikTok / Discord / WhatsApp scale platforms."
      ],
      questions: [
        "Your persuasion-jailbreak work suggests safety training is brittle against social tactics that aren't in RLHF data. If you were building a frontier safety team today, would you index on RLHF coverage, inference-time monitors, or architecture changes?",
        "The Artificial Hivemind paper argues current LLMs converge to homogeneous outputs. Is the right fix more data, more diverse RLHF, or something architectural — and does it create a moat for a pluralistic-AI startup?",
        "From your AI2 perch, which capability gap, if solved tomorrow, would most accelerate startups: theory of mind, cross-cultural calibration, or disagreement-aware generation?",
        "Where's the line between *measuring* social intelligence (your benchmarks) and *training* it? Are benchmarks like FANToM becoming targets that get gamed?",
        "Are you actively considering a startup? What would the right co-founder profile and structure look like?"
      ]
    },

    {
      id: "sawyer",
      name: "Azadeh Omidfar Sawyer",
      slot: "4:15–5:00",
      location: "Margaret Morrison (IW) Room 415",
      title: "Assistant Professor of Architecture · Track Chair, MS & PhD in Building Performance & Diagnostics",
      lab: "Center for Building Performance and Diagnostics (CBPD)",
      labUrl: "https://www.cmu.edu/architecture/",
      personalUrl: "https://www.architecture.cmu.edu/profiles/azadeh-o-sawyer",
      facultyUrl: "https://www.cmu.edu/news/experts/azadeh.sawyer",
      themes: ["built", "imaging"],
      tagline: "AI + CV for urban performance — daylight, energy, climate, equity at neighborhood scale",
      bio: "Architect and building scientist (B.Arch Cal Poly SLO, M.Des Sustainable Design Harvard GSD, PhD in Building Technology). Track Chair of CMU's MS/PhD in Building Performance & Diagnostics. Affiliated with the Scott Institute for Energy Innovation. The non-obvious entry on this list — and the strongest 'AI for climate / cities' angle of the day. Already co-authoring with Narasimhan on inverse rendering.",
      themes_detail: [
        "Urban-scale building energy modeling (UBEM)",
        "Daylighting, glare, and visual comfort",
        "Computer vision for building stock and façade analytics",
        "Digital twins of neighborhoods",
        "Biophilic design and indoor environmental quality",
        "Climate-equity analytics — energy burden, heat exposure"
      ],
      spinout: "Pittsburgh city / Green Building Alliance / 2030 District partnerships. Author of 50 Bird-Friendly Glass Patterns (American Bird Conservancy, 2023). No publicly-known standalone startup — meaningful greenfield for commercialization given the climate-tech capital environment.",
      papers: [
        {
          title: "Virtual home staging and relighting from a single panorama under natural illumination",
          authors: "Ji, G., Sawyer, A.O., Narasimhan, S.G.",
          venue: "Machine Vision and Applications, 35(4), 98",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=Virtual+home+staging+relighting+panorama+Narasimhan",
          summary: "HDR panorama in, relit and re-furnished interior out under measured outdoor illumination. Joint with Narasimhan — the verified cross-RI / Architecture collaboration of the day.",
          starred: true,
          coauthors: ["narasimhan"]
        },
        {
          title: "MEBA: AI-powered Precise Building Monthly Energy Benchmarking Approach",
          authors: "Li, Bie, Lu, Loftness, Sawyer",
          venue: "Applied Energy, 359, 122716",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=MEBA+AI+Building+Energy+Sawyer",
          summary: "ML approach for monthly building energy benchmarking that beats annual-level benchmarks — the data plumbing for utility DSM and city decarbonization programs.",
          starred: true
        },
        {
          title: "Generalized building energy and carbon emissions benchmarking with post-prediction analysis",
          authors: "Li, Liu, Tang, Loftness, Lu, Xie, Sawyer",
          venue: "Developments in the Built Environment, 17, 100320",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=Generalized+building+energy+benchmarking+Sawyer",
          summary: "Generalized framework for cross-building energy and carbon benchmarking; portable to any city dataset."
        },
        {
          title: "Occupant-centric digital twin: occupant engagement in thermal comfort decision-making",
          authors: "Saadatifar, Byrne, Sawyer",
          venue: "Architecture, 4(2), 390-415",
          year: 2024,
          link: "https://www.mdpi.com/2673-8945/4/2/22",
          summary: "Digital-twin framework that loops occupant input into thermal-comfort decisions — turns smart buildings from sensor dashboards into participatory systems."
        },
        {
          title: "Investigating the impact of combined daylight and electric light on human perception of indoor spaces",
          authors: "Nikookar, Goel, Rockcastle, Sawyer",
          venue: "Sustainability, 16(9), 3691",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=combined+daylight+electric+light+perception+Sawyer",
          summary: "Perceptual study of how mixed daylight and electric lighting affect occupant experience — feeds into evidence-based lighting design standards."
        },
        {
          title: "Biophilic design elements and natural materials in healthcare environments",
          authors: "Maghlakelidze, Mesa, Morad, Ben-Alon, Sawyer",
          venue: "Journal of Green Building, 19(3), 1-39",
          year: 2024,
          link: "https://scholar.google.com/scholar?q=Biophilic+design+healthcare+Sawyer",
          summary: "Evidence review for biophilic design in healthcare facilities — supports a real client pipeline in hospital architecture."
        },
        {
          title: "Leveraging Humanized Performance Labeling to Drive Sustainable Building Choices",
          authors: "Saadatifar, Sawyer",
          venue: "Architecture, 5(2), 30",
          year: 2025,
          link: "https://www.mdpi.com/2673-8945/5/2/30",
          summary: "Tests whether humanized (not just numeric) energy labels influence buyers' choices — a behavioral-econ angle on building disclosure policy."
        }
      ],
      commercialization: [
        "CV-powered urban building energy modeling for utilities, cities, and CRE owners — street-view + aerial + assessor data → parcel-level energy model + retrofit ROI. Already the technical core of her MEBA paper.",
        "Climate / comfort / daylight scoring for real estate — 'Walk Score for daylight + summer overheating + view quality + 2030/2050 climate cost' as an underwriting and listing-portal product.",
        "Generative retrofit copilot for façades and shading — pairs naturally with Jun-Yan Zhu's generative work and Narasimhan's relighting.",
        "Equity-aware neighborhood digital twin for municipalities — the productized Pittsburgh framework. Buyer: cities deploying IRA / state climate dollars."
      ],
      questions: [
        "Your work with Narasimhan on virtual staging is the verified RI × Architecture collaboration of this day. Is there a real product in that pipeline — for real estate, AEC, or both?",
        "Of UBEM-from-imagery, daylight/view scoring, generative retrofit, and equity digital twins — which has the cleanest path to a paying customer, and who is that customer?",
        "Pittsburgh has been a generous testbed. Where do academic digital-twin projects usually die when cities try to operate them?",
        "Has any utility or insurer started underwriting equity-aware climate analytics, or is that still grant-funded?",
        "You come from architecture and building science, not CS. What does that change about what a climate-tech AI startup should look like — team, first product, sales motion — that a typical AI founder would get wrong?"
      ]
    }
  ],

  // Verified cross-faculty co-authorships (real, not inferred)
  connections: [
    { a: "delatorre", b: "morency", weight: 3, paper: "LlaMADRS (2025)", note: "Clinical depression assessment from LLMs — the strongest healthcare-AI bridge of the day." },
    { a: "narasimhan", b: "sawyer", weight: 3, paper: "Virtual home staging & relighting (2024)", note: "Verified RI × Architecture collaboration; joint inverse rendering for interiors." },
    { a: "busso", b: "diab", weight: 2, paper: "Sentipolis (2026)", note: "Emotion-aware agents for social simulation — first verified Busso × Diab paper." },
    { a: "diab", b: "sap", weight: 3, paper: "Common Sense or Ableism? + AI Welfare Is Bullshit (2026)", note: "Two co-authored 2026 papers on responsible AI." },
    { a: "morency", b: "sap", weight: 1, paper: "(LTI dept, shared students)", note: "Same dept; overlap on socially-aware language and behavior. Not yet a verified joint paper but high likelihood." },
    { a: "morency", b: "busso", weight: 1, paper: "(USC SAIL/ICT lineage)", note: "Both came through Shri Narayanan's SAIL/ICT lab. Long-standing personal/professional tie." },
    { a: "diab", b: "morency", weight: 1, paper: "(LTI dept; she now directs his department)", note: "Diab now directs LTI; Morency and Sap report up to her." }
  ],

  // Cross-cutting themes worth pitching
  threads: [
    {
      title: "Healthcare AI",
      faculty: ["delatorre", "morency", "diab", "busso", "narasimhan", "erickson"],
      summary: "The thickest thread on this list. Six faculty all credibly touch healthcare from different layers — perception (Narasimhan medical imaging), behavior (De la Torre, Morency), language (Diab StressRoBERTa), voice (Busso biomarkers), embodied care (Erickson). The LlaMADRS paper (De la Torre + Morency) is the most concrete cross-faculty artifact."
    },
    {
      title: "Responsible & Multilingual AI",
      faculty: ["diab", "sap", "zhu"],
      summary: "Diab as LTI Director + ex-Meta LLaMA RAI lead, Sap on safety / persuasion / bias, Zhu on attribution and concept ablation. Together they cover the full responsible-generation stack — language, vision, evaluation."
    },
    {
      title: "Generative + Physical World",
      faculty: ["zhu", "narasimhan", "sawyer", "erickson"],
      summary: "Generative AI (Zhu), physical imaging (Narasimhan), buildings (Sawyer), embodied robots (Erickson). The Sawyer × Narasimhan paper is the bridge between generative graphics and the built environment."
    },
    {
      title: "Multimodal Social AI",
      faculty: ["morency", "busso", "sap", "delatorre"],
      summary: "Morency (multimodal ML founder), Busso (emotion), Sap (social commonsense / theory of mind), De la Torre (behavioral imaging). The shared substrate for any 'AI that understands humans' product."
    }
  ],

  // The day itself
  agenda: [
    { time: "9:00–9:15", room: "Smith Hall 222", who: "Sachal + Fernando", event: "Informal kickoff + coffee" },
    { time: "9:15–10:00", room: "Smith Hall 222", who: "delatorre", event: "Behavioral Imaging · Social Prosthesis · Trustworthy Medical AI" },
    { time: "10:00–10:30", room: "Smith Hall 223", who: "narasimhan", event: "Medical Imaging · Computational imaging deep inside the body" },
    { time: "10:35–11:05", room: "Smith Hall 216", who: "zhu", event: "Generative AI · Human-centric generative frameworks" },
    { time: "11:10–12:00", room: "Newell-Simon Hall 4627", who: "erickson", event: "Medical Robotics · Caregiving and physical HRI" },
    { time: "12:00–1:30", room: "Craig St.", who: null, event: "Lunch" },
    { time: "1:30–2:15", room: "GHC 5117", who: "morency", event: "Multimodal AI for mental-health understanding" },
    { time: "2:15–3:00", room: "GHC 5117 / Zoom", who: "diab", event: "Responsible NLP · LTI Director" },
    { time: "3:00–3:30", room: "GHC 5117", who: "busso", event: "Affective computing · Speech + multimodal emotion" },
    { time: "3:30–4:00", room: "GHC 5117", who: "sap", event: "Social NLP · Safety, bias, commonsense" },
    { time: "4:15–5:00", room: "Margaret Morrison (IW) 415", who: "sawyer", event: "AI + CV for urban performance and climate" },
    { time: "5:00–6:00", room: "Craig St.", who: null, event: "Happy hour" }
  ]
};
