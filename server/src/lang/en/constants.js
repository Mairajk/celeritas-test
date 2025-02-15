export const cargoCarriedOptions = [
    'General Freight',
    'Household Goods',
    'Metal: sheets, coils',
    'Metal: sheets, coils, rolls',
    'Motor Vehicles',
    'Drive/Tow away',
    'Logs, Poles, Beams, Lumber',
    'Fresh Produce',
    'Mobile Homes',
    'Machinery, Large Objects',
    'Liquids/Gases',
    'Intermodal Cont.',
    'Passengers',
    'Oilfield Equipment',
    'Livestock',
    'Grain, Feed, HayCoal/Coke',
    'Garbage/Refuse',
    'US Mail',
    'Chemicals',
    'Commodities Dry Bulk',
    'Refrigerated Food',
    'Beverages',
    'Paper Products',
    'Utilities',
    'Agricultural/Farm Supplies',
    'Construction',
    'Water Well',
    'Meat',
]

export const stateDrivingLicenseValidationRegux = {
    Alabama: '\\d{7}',
    Alaska: '\\d{7}',
    Arizona: '[a-zA-Z]\\d{8}|\\d{9}',
    Arkansas: '9\\d{8}',
    California: '[a-zA-Z]\\d{7}',
    Colorado: '\\d{2}-\\d{3}-\\d{4}',
    Connecticut: '\\d{9}',
    Delaware: '\\d{7}',
    Florida:
        '[a-zA-Z]\\d{3}\\d{3}\\d{3}\\d{3}|[a-zA-Z]\\d{12}|[a-zA-Z]\\d{3}-\\d{3}-\\d{2}-\\d{3}-\\d|[a-zA-Z]-\\d{3}-\\d{3}-\\d{3}-\\d{3}',
    Georgia: '\\d{9}',
    Hawaii: '[a-zA-Z]\\d{8}',
    Idaho: '[a-zA-Z]{2}\\d{6}[a-zA-Z]',
    Illinois: '[a-zA-Z]\\d{3}-\\d{4}-\\d{4}|[a-zA-Z]\\d{11}',
    Indiana: '\\d{4}-\\d{2}-\\d{4}',
    Iowa: '\\d{3}[a-zA-Z]{2}\\d{4}|\\d{9}',
    Kansas: '[a-zA-Z]\\d{2}-\\d{2}-\\d{4}',
    Kentucky: '[a-zA-Z]\\d{2}-\\d{3}-\\d{3}',
    Louisiana: '\\d{9}',
    Maine: '\\d{7}',
    Maryland: '[a-zA-Z]-\\d{3}-\\d{3}-\\d{3}-\\d{3}|[a-zA-Z]\\d{12}',
    Massachusetts: '[0-9]{9}',
    Michigan: '[a-zA-Z]\\s\\d{3}\\s\\d{3}\\s\\d{3}\\s\\d{3}|[a-zA-Z]\\d{12}',
    Minnesota: '[a-zA-Z]\\d{12}',
    Mississippi: '\\d{3}-\\d{2}-\\d{4}',
    Missouri: '[a-zA-Z]\\d{9}',
    Montana:
        '(([0][1-9]|[1][0-2])\\d{3}([1-9][0-9]{3})41([0][1-9]|[1][0-9]|[3][0-1]))|\\d{9}',
    Nebraska: '[a-zA-Z]\\d{8}',
    Nevada: '\\d{10}',
    'New Hampshire':
        '([0][1-9]|[1][0-2])[a-zA-Z]{3}\\d{2}(0[1-9]|[1-2][0-9]|3[0-1])\\d',
    'New Jersey': '[a-zA-Z]\\d{4} \\d{5} \\d{5}|[a-zA-Z]\\d{14}',
    'New Mexico': '\\d{9}',
    'New York': '\\d{3} \\d{3} \\d{3}|\\d{9}',
    'North Carolina': '\\d{12}',
    'North Dakota': '[a-zA-Z]{3}-\\d{2}-\\d{4}',
    Ohio: '[a-zA-Z]{1}[0-9]{4,8}|[a-zA-Z]{2}[0-9]{3,7}|[0-9]{8}',
    Oklahoma: '[a-zA-Z]\\d{9}',
    Oregon: '\\d{7}',
    Pennsylvania: '\\d{2}\\s\\d{3}\\s\\d{3}',
    'Rhode Island': '[1-9]{2}\\d{5}',
    'South Carolina': '\\d{9}',
    'South Dakota': '\\d{8}',
    Tennessee: '\\d{7,9}',
    Texas: '\\d{8}',
    Utah: '\\d{9}',
    Vermont: '\\d{7}[a-zA-Z]|\\d{8}',
    Virginia: '[a-zA-Z]\\d{2}-\\d{2}-\\d{4}|[a-zA-Z]\\d{8}',
    Washington: '[a-zA-Z]{3}\\*\\*[a-zA-Z]{2}\\d{3}[a-zA-Z]\\d',
    'District of Columbia': '\\d{7}',
    'West Virginia': '[a-zA-Z]\\d{6}|\\d{7}',
    Wisconsin: '[a-zA-Z]\\d{3}-\\d{4}-\\d{4}-\\d{2}',
    Wyoming: '\\d{6}-\\d{3}',
}

export const states = {
    'new york': 'New York',
    york: 'New York',
    california: 'California',
    illinois: 'Illinois',
    florida: 'Florida',
    texas: 'Texas',
    pennsylvania: 'Pennsylvania',
    georgia: 'Georgia',
    'district of columbia': 'District Of Columbia',
    columbia: 'District Of Columbia',
    massachusetts: 'Massachusetts',
    arizona: 'Arizona',
    michigan: 'Michigan',
    washington: 'Washington',
    minnesota: 'Minnesota',
    colorado: 'Colorado',
    nevada: 'Nevada',
    maryland: 'Maryland',
    missouri: 'Missouri',
    oregon: 'Oregon',
    'puerto rico': 'Puerto Rico',
    puerto: 'Puerto Rico',
    rico: 'Puerto Rico',
    indiana: 'Indiana',
    ohio: 'Ohio',
    virginia: 'Virginia',
    'north carolina': 'North Carolina',
    wisconsin: 'Wisconsin',
    'rhode island': 'Rhode Island',
    rhode: 'Rhode Island',
    tennessee: 'Tennessee',
    utah: 'Utah',
    oklahoma: 'Oklahoma',
    connecticut: 'Connecticut',
    kentucky: 'Kentucky',
    louisiana: 'Louisiana',
    nebraska: 'Nebraska',
    alabama: 'Alabama',
    'new mexico': 'New Mexico',
    mexico: 'New Mexico',
    'south carolina': 'South Carolina',
    iowa: 'Iowa',
    kansas: 'Kansas',
    arkansas: 'Arkansas',
    idaho: 'Idaho',
    'new jersey': 'New Jersey',
    jersey: 'New Jersey',
    hawaii: 'Hawaii',
    mississippi: 'Mississippi',
    alaska: 'Alaska',
    'new hampshire': 'New Hampshire',
    hampshire: 'New Hampshire',
    'north dakota': 'North Dakota',
    maine: 'Maine',
    'south dakota': 'South Dakota',
    'west virginia': 'West Virginia',
    west: 'West Virginia',
    montana: 'Montana',
    delaware: 'Delaware',
    vermont: 'Vermont',
    wyoming: 'Wyoming',
}

export const licenseKeys = {
    iss: 'issuanceDate',
    exp: 'expiryDate',
    dl: 'licenseNumber',
    lic: 'licenseNumber',
    id: 'licenseNumber',
    class: 'class',
    end: 'endorsement',
    // dd: 'documentDiscriminator',
    // '00': 'documentDiscriminator',
    // oo: 'documentDiscriminator',
    // do: 'documentDiscriminator',
    // od: 'documentDiscriminator',
}

export const licenseEndorsements = {
    none: 'None',
    p: 'P: Passenger Transport',
    h: 'H: Hazardous Materials',
    n: 'N: Tanker Vehicle',
    t: 'T: Double/Triple Trailers',
    s: 'S: School Bus/Passenger Transport',
    x: 'X: Tanker and Hazardous Materials',
}

export const driverClass = {
    a: 'Class A',
    b: 'Class B',
    c: 'Class C',
    d: 'Class D',
}

export const options = {
    licenseInformation: [
        {
            class: 'Class A',
            endorsements: [
                'None',
                'P: Passenger Transport',
                'H: Hazardous Materials',
                'N: Tanker Vehicle',
                'T: Double/Triple Trailers',
                'S: School Bus/Passenger Transport',
                'X: Tanker and Hazardous Materials',
            ],
            restrictions: [
                'None',
                'L: Air Brakes Restriction',
                'Z: Air Brakes Restriction',
                'E: Manual Transmission Restriction',
                'K: Interstate Travel Restriction',
                'O: Fifth-Wheel Connection Restriction',
                'M: Class A Passenger Vehicle Restriction',
                'V: Medical Variance Restriction',
                'P: Bus Containing Passengers',
            ],
        },
        {
            class: 'Class B',
            endorsements: [
                'None',
                'P: Passenger Transport',
                'H: Hazardous Materials',
                'N: Tanker Vehicle',
                'T: Double/Triple Trailers',
            ],
            restrictions: [],
        },
        {
            class: 'Class C',
            endorsements: [
                'None',
                'P: Passenger Transport',
                'H: Hazardous Materials',
                'N: Tanker Vehicle',
                'T: Double/Triple Trailers',
            ],
            restrictions: [],
        },
        {
            class: 'Class D',
            endorsements: [
                'None',
                'P: Passenger Transport',
                'H: Hazardous Materials',
                'N: Tanker Vehicle',
                'T: Double/Triple Trailers',
            ],
            restrictions: [],
        },
    ],
    experience: [
        {
            vehicleClass: 'Light Duty (< 10,000 lbs)',
            vehicleTypes: [
                'Mini Van',
                'Cargo Van',
                'SUV',
                'Pickup Truck',
                'Full-size Pickup',
                'Step Van',
            ],
        },
        {
            vehicleClass: 'Medium Duty (10,001 – 26,000 lbs)',
            vehicleTypes: [
                'Walk-in',
                'Box Truck',
                'City Delivery',
                'Heavy-Duty Pickup',
                'Large Walk-in',
                'Bucket Truck',
                'Beverage Truck',
                'Single-Axle',
                'School Bus',
                'Rack Truck',
            ],
        },
        {
            vehicleClass: 'Heavy Duty (> 26,000 lbs)',
            vehicleTypes: [
                'Refuse',
                'Furniture',
                'City Transit Bus',
                'Truck Tractor',
                'Cement Truck',
                'Dump Truck',
                'Sleeper Cab',
                'Flatbed',
                'Tractor Trailer',
                'Semi-trailer Truck',
            ],
        },
    ],
    accidentTypes: ['Viol', 'Accd'],
    sharedEntityTypes: ['folder', 'file', 'dq-file', 'dq-folder'],
    actionRequired: [
        'Action taken, see below',
        'Not qualified, remove from service',
        'No action required, continue qualification',
    ],
}

export const driverObj = {
    experience: [
        {
            equipmentClass: '',
            equipmentType: '',
            startDate: '',
            endDate: '',
            approxMiles: '',
        },
    ],
    employmentRecord: [
        {
            employer: '',
            position: '',
            startDate: '',
            endDate: '',
            reasonForLeaving: '',
        },
    ],
    residence: [
        {
            zipCode: '',
            city: '',
            state: '',
            address: '',
        },
    ],
    licenseDenied: false,
    licenseDeniedReason: '',
    licenseRevoked: false,
    licenseRevokedReason: '',
    license: [
        {
            driverType: null,
            frontPhoto: null,
            backPhoto: null,
            licenseNumber: '',
            class: null,
            endorsement: null,
            expiryDate: '',
            issuanceState: '',
            issuanceDate: '',
        },
    ],
    zipCode: '',
    city: '',
    state: '',
    address: '',
    dateOfBirth: '',
    socialSecurityNumber: '',
    carrier: '',
    sendEmail: false,
    gender: null,
    altPhoneNumber: '',
    profilePhoto: null,
    carrierId: null,
    carrierLegalName: null,
    lastName: '',
    middleName: '',
    firstName: '',
    email: '',
    mobileNumber: '',
}
