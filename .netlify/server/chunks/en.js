const name = "Asok Montri Dental Clinic";
const navbar = [
  {
    href: "welcome",
    name: "Home"
  },
  {
    href: "services",
    name: "Services"
  },
  {
    href: "team",
    name: "Our team"
  },
  {
    href: "technology",
    name: "Technology"
  },
  {
    href: "promo",
    name: "Special offers"
  },
  {
    href: "contact",
    name: "Contact us"
  }
];
const welcome = {
  title: "Welcome to Asok Montri Dental Clinic",
  text: [
    "Located in the heart of Bangkok, Asok Montri Dental Clinic is on Asok Montri Road, in the proximity of Asoke BTS Station and Sukhumvit MRT Station, providing a comprehensive range of high-quality dental services to both local and international patients.",
    "Our Thai, American, and British certificated dentists are dedicated in their pursuit of excellence and offer their expertise in a courteous and professional manner. We offer our patients the highest quality services in a warm and luxurious environment.",
    "Our multidisciplinary team with over 35 years of experience is headed by Dr. Song Auttawetchakul, American board certified prosthodontist and Dr. Sunee Panyayutthakarn, specialized in oral and dental implant surgery. We provide a complete oral care specialized in implant dentistry, esthetic smile, and also full mouth rehabilitation.",
    "Services comprise of general and specialist dentistry, including orthodontics (braces and Invisalign), endodontics (root canals), prosthodontics (dentures etc), dental implants, oral surgery, pediatric dentistry and cosmetic dental procedures. Sedation and general anesthesia dentistry is also available."
  ]
};
const services = {
  title: "Services",
  text: [
    {
      title: "General dentistry",
      href: "general-dentistry"
    },
    {
      title: "Full mouth rehabilitation",
      href: "full-mouth-rehab"
    },
    {
      title: "Dental implants",
      href: "implants"
    },
    {
      title: "Esthetics",
      href: "esthetics"
    },
    {
      title: "Oral surgery",
      href: "surgery"
    },
    {
      title: "Invisalign",
      href: "invisalign"
    },
    {
      title: "TMJ and occlusion treatment",
      href: "tmj"
    },
    {
      title: "Orthodontics",
      href: "orthodontics"
    },
    {
      title: "Root canal treatment",
      href: "rct"
    },
    {
      title: "Periodontal treatment",
      href: "periodontal"
    },
    {
      title: "Dental anxiety and phobia",
      href: "anxiety-phobia"
    }
  ]
};
const team = {
  title: "Our team",
  text: [
    {
      name: "Dr. Song Auttawetchakul",
      desc: [
        "Cert. (Prosthodontics)",
        "MS. (U Maryland, USA)",
        "Diplomate, American Board of Prosthodontics"
      ]
    },
    {
      name: "Dr. Sunee Panyayutthakarn",
      desc: [
        "Cert. (Surgery)",
        "Cert. (Implant Dentistry) UCLA, USA"
      ]
    },
    {
      name: "Dr. Supawat Puttipart",
      desc: [
        "Master of Science (Orthodontics)"
      ]
    },
    {
      name: "Dr. Porntip Veeriyapak",
      desc: [
        "DDS. MS. Master degree in Periodontics",
        "Chulalongkorn University Post Graduated non-degree in Periodontics.",
        "University of Michigan, Ann Arbor"
      ]
    },
    {
      name: "Dr. Patsri Assadonmingmit",
      desc: [
        "Certificate in endodontics"
      ]
    },
    {
      name: "Dr. Prapon Nipattasat",
      desc: [
        "MSC in Prosthetic Dentistry University of London UK"
      ]
    }
  ]
};
const technology = {
  title: "Our technology",
  text: [
    "CT scan",
    "Digital X-ray",
    "Dental oral scan by iTero",
    "In-house labratory"
  ]
};
const promo = {
  title: "Special offers",
  text: [
    ""
  ]
};
const contact = {
  title: "Contact us",
  address: [
    "38/8 Asoke Montri Road",
    "Klong Toey Nuea, Watthana",
    "Bangkok, 10110"
  ],
  email: "Email",
  tel: "Tel",
  mobile: "Mobile",
  line: "Line ID"
};
const esthetics = {
  title: "Esthetics",
  subtitle: "Your prosthodontist is American Board certified.",
  motto: "Your smile: our specialty.",
  content: [
    {
      topic: "Teeth whitening",
      text: ""
    },
    {
      topic: "Porcelain veneers (e.max)",
      text: ""
    },
    {
      topic: "Porcelain crowns (zirconium)",
      text: ""
    },
    {
      topic: "Porcelain inlays and onlays",
      text: ""
    }
  ]
};
const invisalign = {
  title: "Invisalign",
  content: [
    {
      topic: "Child, teen adult",
      text: ""
    },
    {
      topic: "Invisalign Go",
      text: "Invisalign Go is a streamlined, shorter version of the traditional Invisalign system, designed for treating minor to moderate tooth misalignments and is typically offered by general dentists or orthodontists. It uses fewer aligners than full Invisalign, resulting in a shorter treatment duration.<br><br> Treatment Focus: Invisalign Go is suitable for patients with mild to moderate cases of misalignment, such as minor crowding, gaps, or slight rotations. <br>Treatment Duration: The treatment time is typically shorter than full Invisalign, often ranging from 7 to 15 weeks. <br>Number of Aligners: Invisalign Go uses fewer aligners, typically 20-26, compared to the full Invisalign system which can use up to 50 aligners. <br>Who can offer it: Invisalign Go can be offered by general dentists or orthodontists who have been trained in the system. <br><br>Benefits: <br> Shorter treatment time: The shorter treatment duration makes it appealing for patients who want quick results. <br>Cost-effective: The shorter treatment and fewer aligners can make Invisalign Go a more budget-friendly option. <br>Discreet: Like traditional Invisalign, the aligners are clear and removable, making them discreet for patients. <br>Comfortable: The aligners are custom-made to fit the teeth comfortably and apply gentle pressure to reposition the teeth. <br><br>Considerations: <br>Not for severe cases: Invisalign Go is not designed for complex orthodontic issues, such as severe overbites or underbites. <br><br>Consultation is key: It's important to consult with a dental professional to determine if Invisalign Go is the right treatment option for your specific needs."
    },
    {
      topic: "Invisalign First",
      text: `Invisalign First is a clear aligner treatment specifically designed for children aged 6 to 10 to address issues like crowding, spacing, and narrow dental arches, helping to guide the development of their jaws and teeth for a healthy smile as they grow.<br><br>Purpose: It aims to address issues like crowding, spacing, and narrow dental arches, which can affect the development of a child's teeth and jaws.<br>How it Works: Invisalign First uses a series of clear, removable aligners that are custom-made to fit a child's teeth.<br><br>The aligners are designed to be comfortable and removable; they don't have the discomfort of traditional braces, and are easier for children to brush and floss their teeth. The aligners are clear and discreet, allowing children to maintain a natural appearance during treatment.<br><br>Invisalign First is often considered a "Phase 1" treatment, meaning it addresses issues early on to help guide the development of a child's teeth and jaws, potentially preventing more complex problems later on.<br><br>SmartTrack Material: Invisalign First uses SmartTrack material, which is a patented transparent aligner material that's smooth and comfortable in a child's mouth. <br>SmartForce Attachments: SmartForce attachments are small, tooth-colored shapes attached to a patient's teeth that help aligners apply the right amount of force in the right direction.<br>SmartStage Technology: This technology helps to guide the growth of young jaws and developing teeth.`
    },
    {
      topic: "Invisalign Moderate",
      text: "Invisalign Moderate is a specific treatment option within the Invisalign system designed for patients with moderate orthodontic issues, requiring more than minor adjustments but less than severe cases, using custom-made clear aligners to gradually shift teeth into the desired position."
    },
    {
      topic: "Invisalign Comprehensive",
      text: "Invisalign Comprehensive is a teeth-straightening system using clear, removable aligners to address complex orthodontic cases, including crowding, underbites, and overbites, with an unlimited number of aligners to achieve the desired result.<br><br>Who it's for: It's suitable for individuals who may have previously undergone orthodontic treatment or have complex alignment problems, such as crowding, underbites, open bites, overbites, crossbites, and overjets.<br>Treatment duration: The treatment duration can vary between 1 to 4 years, depending on the individual case.<br>"
    }
  ]
};
const implants = {
  title: "Dental Implants",
  subtitle: "10,000+ implant procedure, 35 years of experience",
  content: [
    {
      topic: "Immediate implants",
      text: "Immediate implant placement placing a dental implant at the time of tooth extraction, offers several advantages, including reduced treatment time, minimized bone loss, and improved aesthetics, while also potentially reducing the number of surgical procedures.<br><br>Reduced Treatment Time: Immediate placement combines the extraction and implant placement into a single procedure, shortening the overall treatment timeline compared to delayed implant placement. Minimizes Bone and Soft Tissue Loss: By placing the implant immediately, you can help preserve the surrounding bone and soft tissue structure, reducing the risk of bone resorption and contour changes that can occur after<br>Improved Aesthetics: Preserving bone and soft tissue volume can lead to better aesthetics and a more natural-looking result.<br>Fewer Surgical Procedures: Immediate placement eliminates the need for a separate surgery to place the implant, reducing the number of procedures and potential trauma for the patient.<br> Potential for Immediate Loading: In some cases, the implant can be loaded (restored with a crown or bridge) immediately, allowing for quicker restoration of function and aesthetics.<br>Better Osseointegration: The fresh socket healing potential may lead to better osseointegration (the process where the implant fuses with the bone)."
    },
    {
      topic: "Immediate implants with restoration (one visit)",
      text: "Immediate implant restoration involves placing a dental implant and its restoration (like a crown) at the same time as tooth extraction, aiming for faster treatment and preserving the natural appearance.<br><br> Immediate Implant Placement: The dental implant is placed in the extraction socket immediately after the tooth is removed.<br><br>Immediate Restoration: A temporary or permanent restoration (like a crown or bridge) is placed on the implant shortly after placement, often within a few days.<br><br>Reduced Treatment Time: Eliminates the need for a separate surgery for implant placement and reduces the overall"
    },
    {
      topic: "Full mouth dental implants",
      text: ""
    },
    {
      topic: "Multiple implants",
      text: ""
    },
    {
      topic: "Single implant",
      text: ""
    },
    {
      topic: "All-on-4 implants",
      text: "All-on-4 is a dental implant technique where four implants are placed in the jawbone to support a full arch of prosthetic teeth, often a fixed bridge or denture. It's a good option for patients who have lost most or all of their teeth due to decay, disease, or injury, offering a more stable and permanent solution compared to traditional removable dentures. <br>• Stability and Function: All-on-4 implants provide a more stable and functional solution compared to traditional dentures. <br>• Reduced Bone Grafting: The angled placement of the implants can sometimes eliminate the need for bone grafting, which is a common procedure required for traditional implants. <br>• Immediate Function: In some cases, patients can receive a fixed bridge or denture on the same day as the implant surgery, allowing them to have a full set of teeth immediately. <br>• Improved Aesthetics: All-on-4 implants can restore a natural-looking smile and improve overall oral health. <br><br>Considerations<br>• Not for everyone: All-on-4 may not be suitable for all patients, particularly those with severe bone loss or other health conditions. <br>• Maintenance: All-on-4 implants require regular dental checkups and proper oral hygiene to ensure their longevity. <br>• All-on-4 vs. Other Implant Options:<br>• All-on-4 vs. All-on-6: All-on-6 uses six implants instead of four, which can provide even greater stability, especially in cases of significant bone loss. <br>• All-on-4 vs. Traditional Implants: All-on-4 is a more cost-effective and less invasive option than placing a traditional implant for each missing tooth."
    },
    {
      topic: "Computer guided implant surgery",
      text: ""
    }
  ]
};
const surgery = {
  title: "Oral Surgery",
  subtitle: "Implant Cumulative success rate is 99% in 35 years. <br>In all on 4 and all on X , more than 18,000 implant cases.<br>Sinus graft success rate 100% in 35 years.  More than 2,000 cases.",
  content: [
    {
      topic: "Sinus graft (100% success rate over 2,000 cases)",
      text: "Sinus grafting, also known as sinus lift or augmentation, is a surgical procedure that increases bone volume in the upper jaw to facilitate dental implant placement, particularly in areas where the sinus cavity encroaches on the bone. <br><br>Why Sinus Grafting is Necessary:<br>• The upper jawbone (maxilla) naturally has less bone than the lower jaw. <br>• When teeth are lost, the bone in that area can thin and the sinus cavity (which is an air-filled space above the upper teeth) can expand, reducing the amount of bone available for implants. <br>• Sinus grafting addresses this by adding bone to the area, creating a stable foundation for dental implants. <br>• The procedure involves lifting the sinus membrane (the lining of the sinus cavity) and placing bone graft material in the space created. <br>• The bone graft material can be from your own body (autograft), from a donor (allograft), or a synthetic material. <br>• After the bone graft heals and integrates with the existing bone, dental implants can be placed. <br><br>Benefits of Sinus Grafting:<br>• Allows for successful dental implant placement in areas with insufficient bone. <br>• Provides a stable foundation for implants, leading to a more functional and durable smile. <br>• Important Considerations:<br>• Healing time after sinus grafting can vary depending on the type of graft material used."
    },
    {
      topic: "Simultaneous implant and sinus graft",
      text: ""
    },
    {
      topic: "Bone graft",
      text: ""
    },
    {
      topic: "Soft tissue graft",
      text: ""
    },
    {
      topic: "Wisdom tooth removal",
      text: ""
    },
    {
      topic: "Embedded tooth removal",
      text: ""
    },
    {
      topic: "Root surgery",
      text: ""
    },
    {
      topic: "Bone and soft tissue surgery",
      text: ""
    }
  ]
};
const rct = {
  title: "Root Canal Treatement",
  content: [
    {
      topic: "Root canal treatment",
      text: ""
    }
  ]
};
const periodontal = {
  title: "Periodontal Treatment",
  content: [
    {
      topic: "Deep cleaning, root planing",
      text: ""
    },
    {
      topic: "Esthetic gum surgery",
      text: ""
    },
    {
      topic: "Peri-implantitis treatment",
      text: ""
    },
    {
      topic: "Bone graft",
      text: ""
    },
    {
      topic: "Gingival graft",
      text: ""
    }
  ]
};
const orthodontics = {
  title: "Orthodontics",
  content: [
    {
      topic: "Orthodontics",
      text: ""
    }
  ]
};
const tmj = {
  title: "TMJ and Occlusion Treatment",
  content: [
    {
      topic: "Tenderness at the joint",
      text: ""
    },
    {
      topic: "Limited movement of the jaw",
      text: ""
    },
    {
      topic: "Dental issues, such as wearing down of teeth",
      text: ""
    }
  ]
};
const reviews = [
  {
    img: "./images/reviewer_image_1.png",
    name: "Mahboobeh Bakhshayesh",
    review: "Dr. Sunee was the only doctor in Bangkok willing to take on my treatment, and I couldn’t be more grateful. She is incredibly professional and skilled. She performed my root canal and also did a biopsy on one of my teeth. Everything went smoothly, and I deeply appreciate her expertise and care."
  },
  {
    img: "./images/reviewer_image_2.png",
    name: "Da Da",
    review: "Today I went to have my tooth extracted. I was very impressed. The female doctor had a very gentle hand. The injection didn't hurt at all. She was very professional. The price was reasonable and not expensive."
  },
  {
    img: "./images/reviewer_image_3.png",
    name: "Yisroel Lieberman",
    review: "I highly recommend this dentist, I came especially from a neighboring country to have 8 implants, he did a thorough, good and quality job, always with a smile on his face, always the most affordable price."
  },
  {
    img: "./images/reviewer_image_4.png",
    name: "Sean Gillanders",
    review: "Dr Song and his team are amazing.  I have just had 12 veneers fitted by Dr Song (after a disappointment from a competitive dental surgery).  I was greeted warmly by the receptionist at my initial enquiry, seen the same day with X-rays etc and then all the preliminary work carried out by Dr Song and his assistants efficiently and professionally making me feel every confidence and trust in Dr Song.  My 12 E-Max veneers were then fitted a week later (allow up to 10 days) and they are beyond my expectation.  I am very very happy and thankful to Dr Song and his team for a fabulous job!!  I am now recommending Dr Songs work to everyone considering teeth veneer work."
  }
];
const en = {
  name,
  navbar,
  welcome,
  services,
  team,
  technology,
  promo,
  contact,
  "general-dent": {
    title: "General Dentistry",
    content: [
      {
        topic: "Dental Check-ups",
        text: "Regular dental check-ups are crucial for maintaining good oral health and overall well-being, enabling early detection and treatment of potential problems, preventing complications, and promoting a healthy smile.<br><br><b>Identifying Problems Early:</b> Dentists can spot issues like cavities, gum disease, and oral cancer in their early stages, when they are easier and less costly to treat.<br><b>Preventing Tooth Decay and Gum Disease:</b> Regular check-ups and professional cleanings help remove plaque and tartar buildup, which can lead to tooth decay and gum disease.<br><b>Preventing Complications:</b> Early detection and treatment can prevent minor problems from escalating into serious, painful, and expensive issues.<br><b>Removing Plaque and Tartar:</b> Professional cleanings remove plaque and tartar that brushing and flossing can't reach, preventing tooth decay and gum disease.<br><b>Improving Gum Health:</b> Regular dental visits can help improve gum health and reduce the risk of gum inflammation, gingivitis, and periodontal disease.<br><br>Poor oral health can be linked to various systemic conditions, including heart disease, diabetes, and respiratory infections.<br>Dentists can provide personalized advice on oral hygiene practices, diet, and other factors that affect oral health."
      },
      {
        topic: "Cleaning, scaling, deep cleaning",
        text: ""
      },
      {
        topic: "Filling",
        text: "Our clinic use  3M ESPE utilises developments in nanotechnology enabling high-quality restorations bringing unsurpassed esthetics and outstanding strength to every restoration—anterior or posterior—with 3MTM FiltekTM Z350 XT Universal Restorative. As you’d expect from the global leader in esthetic and restorative technologies, 3M’s TRUE nanotechnology provides superior wear resistance and gloss retention ... so your restorations will last and look beautiful ."
      },
      {
        topic: "Sealant",
        text: "Dental sealants and fluoride treatments are both preventative measures used by dentists to reduce tooth decay, with sealants acting as a physical barrier against bacteria and acids, while fluoride strengthens tooth enamel."
      },
      {
        topic: "Fluoride",
        text: ""
      }
    ]
  },
  esthetics,
  "full-mouth-rehab": {
    title: "Full Mouth Rehabilitation",
    subtitle: "Your prosthodontist is American Board certified.",
    content: [
      {
        topic: "",
        text: "Full mouth dental rehabilitation or full mouth reconstruction , is a comprehensive dental treatment plan designed to restore the health, function, and aesthetics of the entire mouth, often involving multiple procedures to address issues like tooth loss, damage, severe dental wear and bite problems. <br><br>Full mouth rehabilitation, also known as full mouth restoration or full mouth reconstruction, is a specialized and customized treatment plan that involves a combination of restorative, cosmetic and reconstructive dental procedures.<br><br>Full mouth rehabilitation is designed to address multiple dental issues of patients such as tooth loss, tooth decay, gum disease, bite problems and damaged or worn teeth.<br><br>With ongoing changes in day to day lifestyle and dietary habits, there are a lot of resultant effects you experience in your mouth. There is excessive wear and tear of the surfaces of teeth by grinding or overbite issues. There are certain more factors like poor oral hygiene leading to loose teeth and ultimately losing them. <br><br>Due to continuous wear and tear over the years, your bite collapses leading to decreased jaw size and the face starts looking aged. The collapsed bite and the functional integrity of the worn out teeth along with their aesthetics can be reestablished by<br>• Proper measurement of the facial proportions<br>• Measurements of jaw relations<br>• Establishment of renewed vertical height of the jaws and the face<br>• Delivering the crowns / implants / fixed dentures at the new established vertical height<br><br>If we leave the spaces with missing teeth, other teeth begin to shift when there are no adjacent supporting teeth and the opposing teeth will grow and supraerupt in the available vacant space of the opposite jaw. This will lead to the following sequential problems viz…s<br>• Malalignment of all the teeth<br>• Food lodgement in the catch areas of these malaligned teeth<br>• Cavities and gum problems<br>• TMJ issues<br>• Problem in chewing<br>• Gastrointestinal issues due to swallowing of unchewed food<br>• Compromised aesthetics<br>• Finally leading to a bite collapse and loss of vertical height of the face and jaws<br>As a result the person will look aged with thinner lips and a lopsided smile.<br><br>Full mouth rehabilitation offers significant improvements in oral health by addressing the underlying dental issues that contribute to poor function and aesthetics. By restoring missing teeth with dental implants or prostheses, patients can avoid complications such as tooth drift, which can lead to further occlusal problems. Additionally, improved occlusal contact and the restoration of the vertical dimension of occlusion can alleviate stress on the temporomandibular joint (TMJ), reducing pain and discomfort. Ultimately, these enhancements lead to a healthier mouth, preventing the progression of dental issues and promoting a better quality of life."
      },
      {
        topic: "Complete dentures with or without implants",
        text: ""
      },
      {
        topic: "Full mouth restoration",
        text: ""
      },
      {
        topic: "Restore vertical dimension",
        text: ""
      },
      {
        topic: "Ceramic zirconium crowns",
        text: ""
      },
      {
        topic: "e.max veneers and crowns",
        text: ""
      }
    ]
  },
  invisalign,
  implants,
  surgery,
  rct,
  periodontal,
  orthodontics,
  "anxiety-phobia": {
    title: "Dentistry Anxiety and Phobia",
    content: [
      {
        topic: "General anesthesia and sedation",
        text: ""
      },
      {
        topic: "Oral sedation and general anesthesia working with anesthesiologist team",
        text: ""
      }
    ]
  },
  tmj,
  reviews
};
export {
  contact,
  en as default,
  esthetics,
  implants,
  invisalign,
  name,
  navbar,
  orthodontics,
  periodontal,
  promo,
  rct,
  reviews,
  services,
  surgery,
  team,
  technology,
  tmj,
  welcome
};
