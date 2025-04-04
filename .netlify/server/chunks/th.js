const name = "Asok Montri Dental Clinic";
const navbar = [
  {
    href: "welcome",
    name: "หน้าหลัก"
  },
  {
    href: "services",
    name: "บริการ"
  },
  {
    href: "team",
    name: "ทีมทันตแพทย์"
  },
  {
    href: "technology",
    name: "เทคโนโลยี"
  },
  {
    href: "promo",
    name: "โปรโมชั่น"
  },
  {
    href: "contact",
    name: "ติดต่อเรา"
  }
];
const welcome = {
  title: "ยินดีต้อนรับสู่อโศกมนตรีเด็นทัลคลินิก",
  text: [
    "คลินิกทันตกรรมอโศกมนตรี ริมถนนอโศกมนตรีเยื้องอาคารเสริมมิตร ตรงข้ามอาคารรัชต์ภาคย์ ใกล้กับสถานีรถไฟฟ้า BTS อโศก และสถานีรถไฟใต้ดิน MRT สุขุมวิท  ให้บริการทันตกรรมคุณภาพสูงอย่างครบวงจรแก่ผู้ป่วยทั้งในและต่างประเทศ",
    "ทีมงานมีประสบการณ์มากกว่า 35 ปี เราให้บริการการดูแลช่องปากแบบครบวงจรโดยเชี่ยวชาญด้านทันตกรรมรากเทียม รอยยิ้มเพื่อความงาม และการฟื้นฟูสมรรถภาพทั้งช่องปาก",
    "บริการประกอบด้วยทันตกรรมทั่วไปและทันตกรรมเฉพาะทาง รวมถึงทันตกรรมจัดฟัน (จัดฟันและ Invisalign) ทันตกรรมรากฟัน (คลองรากฟัน) ทันตกรรมประดิษฐ์ (ฟันปลอม ฯลฯ) รากฟันเทียม ศัลยกรรมช่องปาก ทันตกรรมสำหรับเด็ก ข้อต่อขากรรไกรและการบดเคี้ยว และทันตกรรมเพื่อความงาม",
    "นำทีมโดยทันตแพทย์วุฒิบัตรทันตกรรมประดิษฐ์ สหรัฐอเมริกา"
  ]
};
const services = {
  title: "บริการของเรา",
  text: [
    {
      title: "ทันตกรรมทั่วไป",
      href: "general-dentistry"
    },
    {
      title: "ทันตกรรมบูรณะทั้งปาก",
      href: "full-mouth-rehab"
    },
    {
      title: "รากฟันเทียม",
      href: "implants"
    },
    {
      title: "ทันตกรรมเพื่อความสวยงาม",
      href: "esthetics"
    },
    {
      title: "ศัลกรรมช่องปาก",
      href: "surgery"
    },
    {
      title: "จัดฟันใส Invisalign",
      href: "invisalign"
    },
    {
      title: "ข้อต่อขากรรไกรและการบดเคี้ยว",
      href: "tmj"
    },
    {
      title: "จัดฟัน",
      href: "orthodontics"
    },
    {
      title: "รักษารากฟัน",
      href: "rct"
    },
    {
      title: "รักษาโรคเหงือก",
      href: "periodontal"
    },
    {
      title: "ทันตกรรมดมยาสลบ",
      href: "anxiety-phobia"
    }
  ]
};
const team = {
  title: "ทีมทันตแพทย์",
  text: [
    {
      name: "ทพ. สงค์ อรรถเวชกุล",
      desc: [
        "ประกาศนียบัตรทันตกรรมประดิษฐ์",
        "วุฒิบัตรทันตกรรมประดิษฐ์สหรัฐอเมริกา",
        "Cert. (Prosthodontics)",
        "MS. (U of Maryland, USA)",
        "Diplomate, American Board of Prosthodontics"
      ]
    },
    {
      name: "ทพญ. สุนีย์ ปัญญายุทธการ",
      desc: [
        "ประกาศณียบัตรศัลกรรมช่องปาก",
        "ประกาศณียบัตรรากเทียม",
        "Cert. (Surgery)",
        "Cert. (Implant Dentistry) UCLA, USA"
      ]
    },
    {
      name: "ทพ. ศุภวัฒน์ พุฒิภาษ",
      desc: [
        "ป. โท ทันตกรรมจัดฟัน",
        "Master of Science (Orthodontics)"
      ]
    },
    {
      name: "ทพญ. พรทิพย์ วิริยะภาค",
      desc: [
        "ทันตกรรมปริทันต์ สหรัฐอเมริกา",
        "ป. โท ทันตกรรมปริทันต์ จุฬาลงกรณ์",
        "DDS. MS. Master degree in Periodontics",
        "Chulalongkorn University Post Graduated non-degree in Periodontics.",
        "University of Michigan, Ann Arbor, USA"
      ]
    },
    {
      name: "ทพญ. ภัทร์ศรี  อัสดรมิ่งมิตร",
      desc: [
        "ประกาศณียบัตรรักษารากฟัน",
        "Certificate in endodontics"
      ]
    },
    {
      name: "ทพ. ประพนธ์ นิพัทธสัจน์",
      desc: [
        "ทันตกรรมประดิษฐ์ สหราชอาณาจักร",
        "MSC in Prosthetic Dentistry University of London UK"
      ]
    }
  ]
};
const technology = {
  title: "เทคโนโลยี",
  text: [
    "เครื่อง CT scan",
    "เครื่อง Digital X-ray",
    "เครื่องสแกนภายในช่องปาก iTero",
    "แลปทันตกรรมภายในคลินิก"
  ]
};
const promo = {
  title: "โปรโมชั่น",
  text: [
    ""
  ]
};
const contact = {
  title: "ติดต่อเรา",
  address: [
    "38/8 ถนนอโศกมนตรี",
    "แขวงคลองเตยเหนือ เขตวัฒนา",
    "กรุงเทพฯ 10110"
  ],
  email: "อีเมล",
  phone: "โทรศัพท์",
  mobile: "มือถือ",
  line: "ID ไลน์"
};
const esthetics = {
  title: "ทันตกรรมเพื่อความสวยงาม",
  subtitle: "โดยทันตแพทย์วุฒิบัตรทันตกรรมประดิษฐ์ สหรัฐอเมริกา",
  motto: "รอยยิ้มของคุณคืองานของเรา",
  text: [
    "ฟอกสีฟัน",
    "Porcelain veneers (e.max)",
    "Porcelain crowns (zirconium)",
    "Porcelain inlays and onlays"
  ]
};
const invisalign = {
  title: "จัดฟันใส Invisalign",
  text: [
    "Child, teen adult",
    "Invisalign Go",
    "Invisalign First",
    "Invisalign Moderate",
    "Invisalign Comprehensive"
  ]
};
const implants = {
  title: "รากฟันเทียม",
  subtitle: "ประสบการณ์ 35 ปี จำนวนมากกว่า 10,000 ราก",
  text: [
    "รากเทียมชนิดใส่ทันทีหลังถอน",
    "รากเทียมชนิดทดแทนฟันที่ถอนในทันที",
    "รากเทียมทั้งปาก",
    "Multiple implants",
    "Single implant",
    "All-on-4 implants",
    "Computer guided implant surgery"
  ]
};
const surgery = {
  title: "ศัลยกรรมภายในช่องปาก",
  text: [
    "Sinus graft (100% success rate over 1,000 cases)",
    "Simultaneous implant and sinus graft",
    "Bone graft",
    "Soft tissue graft",
    "Wisdom tooth removal",
    "Embedded tooth removal",
    "Root surgery",
    "Bone and soft tissue surgery"
  ]
};
const rct = {
  title: "รักษารากฟัน",
  text: [
    "Root canal treatment"
  ]
};
const periodontal = {
  title: "รักษาโรคเหงือก",
  text: [
    "Deep cleaning, root planing",
    "Esthetic gum surgery",
    "Peri-implantitis treatment",
    "Bone graft",
    "Gingival graft"
  ]
};
const orthodontics = {
  title: "จัดฟัน",
  text: [
    "Orthodontics"
  ]
};
const tmj = {
  title: "โรคข้อต่อขากรรไกรเสื่อม",
  text: [
    "Tenderness at the joint",
    "Limited movement of the jaw",
    "Dental issues, such as wearing down of teeth"
  ]
};
const th = {
  name,
  navbar,
  welcome,
  services,
  team,
  technology,
  promo,
  contact,
  "general-dent": {
    title: "ทันตกรรมทั่วไป",
    text: [
      "ขูดหินปูน",
      "อุดฟัน",
      "เคลือบหลุมร่องฟัน",
      "เคลือบฟลูออไรด์"
    ]
  },
  esthetics,
  "full-mouth-rehab": {
    title: "ทันตกรรมบูรณะทั้งปาก",
    subtitle: "โดยทันตแพทย์วุฒิบัตรทันตกรรมประดิษฐ์ สหรัฐอเมริกา",
    text: [
      "ฟันปลอมทั้งปาก ร่วมกับรากเทียม",
      "ทันตกรรมบูรณะทั้งปาก",
      "ฟื้นฟูระบบบดเคี้ยว",
      "ครอบฟันเซรามิกด้วยเซอร์โคเนียม",
      "วีเนียร์ด้วย e.max",
      "เคลือบผิวฟันด้วยวัสดุที่มีลักษณะคล้ายฟันธรรมชาติ แก้ปัญหารูปร่่างสัดส่วนของฟัน และสีฟันให้สวยงาม"
    ]
  },
  invisalign,
  implants,
  surgery,
  rct,
  periodontal,
  orthodontics,
  "anxiety-phobia": {
    title: "ทันตกรรมแบบดมยาสลบ",
    text: [
      "General anesthesia and sedation",
      "Oral sedation and general anesthesia working with anesthesiologist team"
    ]
  },
  tmj
};
export {
  contact,
  th as default,
  esthetics,
  implants,
  invisalign,
  name,
  navbar,
  orthodontics,
  periodontal,
  promo,
  rct,
  services,
  surgery,
  team,
  technology,
  tmj,
  welcome
};
