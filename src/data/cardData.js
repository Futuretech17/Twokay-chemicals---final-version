// src/data/cardData.js
const cardData = [
    {
        img: './images/products/chromic-catgut.png',
        alt: 'Chromic Catgut',
        title: 'Chromic catgut',
        sizesAvailable: ['2/0 RB', '2/0 RC', '3/0 RB', '3/0 RC'],
        description: 'Sterile surgical suture with prolonged tissue support and absorption.'
    },
    {
        img: './images/products/pga-sutures.png',
        alt: 'PGA Sutures',
        title: 'PGA sutures',
        sizesAvailable: ['Various'],
        description: 'Biodegradable sutures for surgical procedures with excellent tensile strength.'
    },
    {
        img: './images/products/nylon-sutures.png',
        alt: 'Nylon Sutures',
        title: 'Nylon sutures',
        sizesAvailable: ['Various'],
        description: 'Durable nylon sutures for surgical procedures with high tensile strength.'
    },
    {
        img: './images/products/absorbent-cotton-wool.png',
        alt: 'Absorbent Cotton Wool',
        title: 'Absorbent cotton wool',
        sizesAvailable: ['400gm'],
        description: 'Absorbent cotton wool for wound care and medical applications.'
    },
    {
        img: './images/products/gauze-rolls.png',
        alt: 'Gauze Rolls',
        title: 'Gauze rolls',
        sizesAvailable: ['36 IN X 100 YDS, 1.5 KG', '36 IN X 50 YDS, 750 GM', '36 IN X 100 YDS, X Ray 1.5 KG'],
        description: 'Sterile gauze rolls for wound dressing and medical applications.'
    },
    {
        img: './images/products/ambubag.png',
        alt: 'AmbuBag',
        title: 'Ambubag',
        typesAvailable: ['Adult', 'Infant'],
        description: 'Manual resuscitator for artificial ventilation during emergencies. Essential life-saving medical device.'
    },
    {
        img: './images/products/zop-plasters.png',
        alt: 'ZOP Plasters 1pc/box',
        title: 'ZOP Plasters',
        sizesAvailable: ['5.00 CM X 4 YDS', '7.50 CM X 4 YDS', '10.00 CM X 4 YDS', '15.00 CM X 4 YDS'],
        description: 'ZOP plasters: Adhesive medical strips for wound protection and support.'
    },
    {
        img: './images/products/abdominal-gauze-swabs-xray-non-sterile-25-pack.png',
        alt: 'Abdominal Gauze Swabs X-ray Non-Sterile 25 Pack',
        title: 'Non-sterile Abdominal Gauze swabs X-ray',
        description: 'Non-sterile abdominal gauze swabs with X-ray detectable threads. Ideal for wound care and medical procedures, ensuring accurate monitoring.'
    }, 
    {
        img: './images/products/gauze-swabs-non-sterile.png',
        alt: 'Gauze Swabs Non-Sterile 19 X 15 MESH, 8 PLY, 100PCS/BOX',
        title: 'Non-sterile Gauze swabs',
        sizesAvailable: ['2 IN X 2 IN', '3 IN X 3 IN', '4 IN X 4 IN'],
        description: 'Non-sterile gauze swabs, ideal for wound care and medical use.'
    },
    {
        img: './images/products/gauze-swabs-sterile.png',
        alt: 'Gauze Swabs Sterile',
        title: 'Sterile Gauze swabs',
        sizesAvailable: ['3 IN X 3 IN', '4 IN X 4 IN'],
        description: 'Sterile gauze swabs for safe and hygienic wound care. Medical-grade and ready for immediate use.'
    },
    {
        img: './images/products/adhesive-first-aid-strips.png',
        alt: 'Adhesive First Aid Strips',
        title: 'Adhesive First Aid strips',
        typesAvailable: ['PE (Water Proof)', 'Fabric'],
        description: 'Convenient and versatile for minor wound closures. Easy-to-apply for quick and efficient healing.'
    },
    {
        img: './images/products/disposable-sterile-needles.png',
        alt: 'Disposable Sterile Needles',
        title: 'Disposable sterile needles',
        sizesAvailable: ['G 21', 'G 23'],
        description: 'Safe and hygienic medical tools for precise injections. Single-use for reduced risk of contamination.'
    },
    {
        img: './images/products/syringes.png',
        alt: 'Syringes',
        title: 'Syringes',
        sizesAvailable: ['2ML', '5ML', '10ML', '20ML', '60ML With Catheter tip'],
        description: 'Essential medical devices for accurate medication administration and fluid delivery. Safe and versatile.'
    },
    {
        img: './images/products/insulin-syringes.png',
        alt: 'Insulin Syringes',
        title: 'Insulin Syringes',
        sizesAvailable: ['100IU/1ML 30G Needle'],
        description: 'Insulin syringes: Specifically designed for precise insulin dosage. Easy-to-read markings and ultra-fine needles for comfortable injections.'
    },
    {
        img: './images/products/surgical-blade.png',
        alt: 'Surgical Blades',
        title: 'Surgical Blades',
        sizesAvailable: ['G 22', 'G 23', 'G 24'],
        description: 'Sterile surgical blades for precise and safe medical procedures.'
    },
    {
        img: './images/products/folley-catheters.png',
        alt: 'Folley Catheters 2 Way',
        title: 'Folley Catheter 2 way',
        sizesAvailable: ['Sz 14', 'Sz 16', 'Sz 18', 'Sz 20', 'Sz 22', 'Sz 24'],
        description: 'Medical devices for urinary drainage and monitoring. Sterile and efficient.'
    },
    {
        img: './images/products/feeding-tubes.png',
        alt: 'Feeding Tubes',
        title: 'Feeding Tubes',
        sizesAvailable: ['Various'],
        description: 'Medical devices for safe and accurate nutritional delivery. Sterile and reliable.'
    },
    {
        img: './images/products/suction-catheter.png',
        alt: 'Suction Catheter',
        title: 'Suction Catheter',
        sizesAvailable: ['Various'],
        description: 'Medical instruments for effective fluid and debris removal. Sterile and dependable.'
    },
    {
        img: './images/products/sterile-gloves.png',
        alt: 'Sterile Gloves',
        title: 'Sterile Gloves',
        sizesAvailable: ['Sz 7.5'],
        description: 'Essential protective barrier for medical procedures. Hygienic and dependable.'
    },
    {
        img: './images/products/non-sterile-latex-gloves-powdered.png',
        alt: 'Non-Sterile Latex Gloves Powdered',
        title: 'Non-sterile latex gloves powdered',
        sizesAvailable: ['L', 'M'],
        description: 'Versatile hand protection for various applications. Easy to wear and disposable.'
    },
    {
        img: './images/products/non-sterile-latex-gloves-non-powdered.png',
        alt: 'Non-Sterile Latex Gloves Non-Powdered',
        title: 'Non-sterile Latex gloves, Non-powdered',
        sizesAvailable: ['M'],
        description: 'Reliable hand protection for multiple applications. Comfortable and disposable.'
    },
    {
        img: './images/products/wow-bandages.png',
        alt: 'WOW Bandages',
        title: 'Wow Bandages',
        sizesAvailable: ['5.0CM X 4YDS', '7.5CM X 4YDS', '10CM X 5YDS', '15CM X 5YDS'],
        description: 'Innovative and versatile wound dressings. Effective for various injuries.'
    },
    {
        img: './images/products/plaster-of-paris-generic.png',
        alt: 'Plaster of Paris (Generic)',
        title: 'Plaster of Paris (Generic)',
        sizesAvailable: ['4IN', '6IN', '8IN'],
        description: 'Versatile orthopedic casting material for immobilization and support. Widely used in medical applications.'
    },
    {
        img: './images/products/plaster-of-paris-plasto.png',
        alt: 'Plaster of Paris (Plasto)',
        title: 'Plaster of Paris (Plasto)',
        sizesAvailable: ['4 IN', '6IN', '8IN'],
        description: 'Versatile orthopedic casting material for immobilization and support. Easy to use and effective.'
    },
    {
        img: './images/products/orthopadding-cast-generic.png',
        alt: 'Orthopadding Cast (Generic)',
        title: 'Orthopadding Cast (Generic)',
        sizesAvailable: ['4 IN', '6IN', '8IN'],
        description: 'Padded material for orthopedic casting, providing comfortable support. Reliable and easy to apply.'
    },
    {
        img: './images/products/soft-wrap-orthopadding-cast.png',
        alt: 'Soft Wrap Orthopadding Cast',
        title: 'Soft Wrap Orthopadding Cast',
        sizesAvailable: ['4 IN', '6 IN', '8IN'],
        description: 'Comfortable and flexible material for orthopedic casting. Provides optimal support and ease of use.'
    },
    {
        img: './images/products/autoclave-tape.png',
        alt: 'Autoclave Tape',
        title: 'Autoclave Tape',
        sizesAvailable: ['1/2 IN', '3/4 IN', '1 IN'],
        description: 'Essential medical sterilization equipment using high-temperature steam to eliminate pathogens. Ensures safe and hygienic instruments.'
    },
    {
        img: './images/products/non-rebreather-mask.png',
        alt: 'Non-Rebreather Mask',
        title: 'Non-rebreather Mask',
        sizesAvailable: [],
        typesAvailable: ['Adult', 'Paediatric', 'Infant'],
        description: 'Oxygen delivery device with a reservoir bag. Provides high-flow oxygen and minimizes carbon dioxide buildup.'
    },
    {
        img: './images/products/nasal-oxygen-cannula.png',
        alt: 'Nasal Oxygen Cannula',
        title: 'Nasal Oxygen cannula',
        typesAvailable: ['Adult', 'Paed', 'Infant'],
        description: 'Comfortable and lightweight device for oxygen delivery via the nose. Allows patients to move freely during therapy.'
    },
    {
        img: './images/products/et-tubes.png',
        alt: 'E.T Tubes',
        title: 'E.T Tubes',
        sizesAvailable: ['Various'],
        description: 'Vital airway devices used in anesthesia and ventilation. Ensure secure air passage during medical procedures.'
    },
    {
        img: './images/products/iv-cannula.png',
        alt: 'IV Cannula',
        title: 'IV Cannula',
        sizesAvailable: ['G16', 'G18', 'G20', 'G22', 'G24', 'G26'],
        description: 'Thin, flexible tube inserted into veins. Facilitates easy administration of fluids and medications.'
    },
    {
        img: './images/products/pe-gloves.png',
        alt: 'PE Gloves',
        title: 'PE Gloves',
        sizesAvailable: ['M', 'L'],
        description: 'Disposable hand protection. Lightweight and waterproof. Suitable for various applications.'
    },
    {
        img: './images/products/safety-box-5l.png',
        alt: 'Safety Box 5L',
        title: 'Safety Box 5L',
        description: 'Secure containers for proper disposal of medical sharps and hazardous waste. Ensuring safety and infection control.'
    },
    {
        img: './images/products/disposable-gowns.png',
        alt: 'Disposable Gowns',
        title: 'Disposable Gowns',
        description: 'Protective apparel for medical professionals. Lightweight, hygienic, and designed for single-use.'
    },
    {
        img: './images/products/disposable-aprons.png',
        alt: 'Disposable Aprons',
        title: 'Disposable Aprons',
        description: 'Hygienic protective wear for medical and food industry use. Easy to wear and discard after use.'
    },
    {
        img: './images/products/paraffin-gauze.png',
        alt: 'Paraffin Gauze',
        title: 'Paraffin Gauze',
        typesAvailable: ['1 pc/pouch', '10 pc/pouch'],
        description: 'Non-stick wound dressing impregnated with paraffin for easier dressing changes. Supports wound healing.'
    },
    {
        img: './images/products/nitrile-gloves.png',
        alt: 'Nitrile Gloves',
        title: 'Nitrile Gloves',
        sizesAvailable: ['Various'],
        description: 'Latex-free hand protection for medical and industrial use. Durable, comfortable, and resistant to chemicals.'
    },
    {
        img: './images/products/sterile-gynocological-gloves.png',
        alt: 'Sterile Gynocological Gloves',
        title: 'Sterile Gynocological Gloves',
        sizesAvailable: ['7.5'],
        description: 'Hygienic hand protection for obstetric and gynecological procedures. Designed for sensitive examinations with utmost care.'
    },
    {
        img: './images/products/crepe-bandages.png',
        alt: 'Crepe Bandages',
        title: 'Crepe bandages',
        sizesAvailable: ['5.0cm X 5yds', '7.5cm X 5yds', '10cm X 5yds', '15cm X 5yds'],
        description: 'Elastic and breathable support wraps for injuries and strains. Versatile and easy to apply.'
    },
    {
        img: './images/products/spinal-needles.png',
        alt: 'Spinal Needles',
        title: 'Spinal Needles',
        sizeAvailable: ['22G', '25G'],
        description: 'Precise medical instruments for spinal anesthesia and fluid aspiration. Ensures accurate and safe procedures.'
    },

    {
        img: './images/products/disposable-vaginal-speculum.png',
        alt: 'Disposable Vaginal Speculum',
        title: 'Disposable Vaginal Speculum',
        typesAvailable: ['Screw type', 'M', 'L'],
        description: 'Medical device for gynecological examinations. Hygienic, easy-to-use, and single-use for patient comfort.'
    },
    {
        img: './images/products/volumetric-burette-set.png',
        alt: 'Volumetric Burette Set',
        title: 'Volumetric Burette Set',
        sizesAvailable: ['150 ml'],
        description: 'Precise laboratory apparatus for controlled liquid dispensing and titration. Crucial in analytical chemistry and research.'
    },
    {
        img: './images/products/digital-thermometer.png',
        alt: 'Digital Thermometer',
        title: 'Digital Thermometer',
        typesAvailable: ['Infrared', 'FastRead'],
        description: 'Electronic device for accurate temperature measurement. Quick, non-invasive, and user-friendly for health monitoring.'
    },
    {
        img: './images/products/alcohol-pads-sterile.png',
        alt: 'Alcohol Pads Sterile',
        title: 'Alcohol Pads sterile',
        description: 'Individually packaged wipes for skin disinfection. Vital for maintaining aseptic conditions in medical settings.'
    },
    {
        img: './images/products/oxygen-mask.png',
        alt: 'Oxygen Mask',
        title: 'Oxygen Mask',
        typesAvailable: ['Adult', 'Paediatric', 'Infant'],
        description: 'Medical device for delivering supplemental oxygen. Ensures effective respiratory support during treatments and emergencies.'
    },
    {
        img: './images/products/nebulizer-mask.png',
        alt: 'Nebulizer Mask',
        title: 'Nebulizer Mask',
        typesAvailable: ['Adult', 'Paediatric', 'Infant'],
        description: 'Device for delivering inhaled medication. Assists in managing respiratory conditions. Effective and user-friendly.'
    },
    {
        img: './images/products/chrolo-tulle.png',
        alt: 'Chrolo Tulle',
        title: 'Chrolo Tulle',
        sizesAvailable: ['10 CM X 10 CM'],
        description: 'Chlorhexidine-infused gauze for wound care. Provides antimicrobial protection and supports healing.'
    },
    {
        img: './images/products/adhesive-surgical-paper-tape-clinipore.png',
        alt: 'Adhesive Surgical Paper Tape Clinipore',
        title: 'Adhesive Surgical Paper Tape (Clinipore)',
        typesAvailable: ['Micropore'],
        description: 'Gentle and secure medical tape for wound dressing. Hypoallergenic and easy-to-apply.'
    },
    {
        img: './images/products/triangular-bandages.png',
        alt: 'Triangular Bandages',
        title: 'Triangular Bandages',
        typesAvailable: ['Superior Quality'],
        description: 'Versatile first aid tool for immobilization, slings, and support. Essential for emergency care and injuries.'
    },
    {
        img: './images/products/shoe-covers.png',
        alt: 'Shoe Covers',
        title: 'Shoe Covers',
        description: 'Hygienic protective gear for preventing cross-contamination in medical, industrial, and cleanroom environments. Easy to wear and dispose of.'
    },
    {
        img: './images/products/transparent-surgical-tape.png',
        alt: 'Transparent Surgical Tape',
        title: 'Transparent Surgical Tape',
        sizesAvailable: ['1 IN X 5 YDS', '1IN X 10 YDS'],
        description: 'Clear and hypoallergenic adhesive for securing dressings. Reliable and gentle on skin.'
    },
    {
        img: './images/products/bloodbags.png',
        alt: 'Bloodbags',
        title: 'Bloodbags',
        sizesAvailable: ['250ml Single', '450ml Single', '450 ml Double', '450ml Triple'],
        description: 'Sterile and airtight containers for blood collection and storage. Vital for transfusion and medical procedures.'
    }

];

export default cardData;
