/**
 * Created by rob on 2/28/2017.
 */

let xform = [
    {
        "DbName": "pubmed",
        "MenuName": "PubMed",
        "Count": "523",
        "Status": "Ok"
    },
    {
        "DbName": "pmc",
        "MenuName": "PubMed Central",
        "Count": "6091",
        "Status": "Ok"
    },
    {
        "DbName": "books",
        "MenuName": "Books",
        "Count": "231",
        "Status": "Ok"
    },
    {
        "DbName": "pubmedhealth",
        "MenuName": "PubMed Health",
        "Count": "9",
        "Status": "Ok"
    },
    {
        "DbName": "omim",
        "MenuName": "OMIM",
        "Count": "8",
        "Status": "Ok"
    },
    {
        "DbName": "ncbisearch",
        "MenuName": "Site Search",
        "Count": "11",
        "Status": "Ok"
    },
    {
        "DbName": "nuccore",
        "MenuName": "Nucleotide",
        "Count": "3664",
        "Status": "Ok"
    },
    {
        "DbName": "nucgss",
        "MenuName": "GSS",
        "Count": "2830201",
        "Status": "Ok"
    },
    {
        "DbName": "nucest",
        "MenuName": "EST",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "protein",
        "MenuName": "Protein",
        "Count": "808",
        "Status": "Ok"
    },
    {
        "DbName": "genome",
        "MenuName": "Genome",
        "Count": "308",
        "Status": "Ok"
    },
    {
        "DbName": "structure",
        "MenuName": "Structure",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "snp",
        "MenuName": "SNP",
        "Count": "18739",
        "Status": "Ok"
    },
    {
        "DbName": "dbvar",
        "MenuName": "dbVar",
        "Count": "119350",
        "Status": "Ok"
    },
    {
        "DbName": "gene",
        "MenuName": "Gene",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "biosystems",
        "MenuName": "BioSystems",
        "Count": "201",
        "Status": "Ok"
    },
    {
        "DbName": "unigene",
        "MenuName": "UniGene",
        "Count": "62817",
        "Status": "Ok"
    },
    {
        "DbName": "cdd",
        "MenuName": "Conserved Domains",
        "Count": "3922",
        "Status": "Ok"
    },
    {
        "DbName": "clone",
        "MenuName": "Clone",
        "Count": "684049",
        "Status": "Ok"
    },
    {
        "DbName": "popset",
        "MenuName": "PopSet",
        "Count": "24",
        "Status": "Ok"
    },
    {
        "DbName": "geoprofiles",
        "MenuName": "GEO Profiles",
        "Count": "15",
        "Status": "Ok"
    },
    {
        "DbName": "gds",
        "MenuName": "GEO DataSets",
        "Count": "4",
        "Status": "Ok"
    },
    {
        "DbName": "homologene",
        "MenuName": "HomoloGene",
        "Count": "1",
        "Status": "Ok"
    },
    {
        "DbName": "pccompound",
        "MenuName": "PubChem Compound",
        "Count": "37",
        "Status": "Ok"
    },
    {
        "DbName": "pcsubstance",
        "MenuName": "PubChem Substance",
        "Count": "5",
        "Status": "Ok"
    },
    {
        "DbName": "pcassay",
        "MenuName": "PubChem BioAssay",
        "Count": "2",
        "Status": "Ok"
    },
    {
        "DbName": "nlmcatalog",
        "MenuName": "NLM Catalog",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "gap",
        "MenuName": "dbGaP",
        "Count": "3",
        "Status": "Ok"
    },
    {
        "DbName": "proteinclusters",
        "MenuName": "Protein Clusters",
        "Count": "656",
        "Status": "Ok"
    },
    {
        "DbName": "bioproject",
        "MenuName": "BioProject",
        "Count": "3",
        "Status": "Ok"
    }
];
let categorySet = [{
    "category": 'Literature', 'dbList': ['books', 'mesh', 'nlmcatalog',
        'pubmed', 'pmc']
}, {
    "category": 'Genes', 'dbList': ['nucest', 'gds', 'geoprofiles',
        'homologene', 'popset', 'unigene']
}, {
    "category": 'Health', 'dbList': ['clinvar', 'gap', 'gtr',
        'medgen', 'omim', 'pubmedhealth']
}, {
    "category": 'Proteins', 'dbList': ['cdd', 'protein', 'proteinclusters',
        'structure']
}, {
    "category": 'Genomes', 'dbList': ['assembly', 'bioproject', 'biosample',
        'clone', 'dbvar', 'genome', 'nucgss', 'nuccore', 'probe', 'snp', 'sra', 'taxonomy']
},
    {
        "category": 'Chemicals', 'dbList': ['BioSystems', 'pcassay', 'biosample',
        'pccompound', 'pcsubstance']
    }
];

function xformCategories(xform, categorySet) {
    const _ = require('lodash');
    let  result = [];

    categorySet.forEach((cat, indx, catset) => {
        let category = {"category": cat.category, "databases": []};
            cat.dbList.forEach((db) => {
                xform.forEach((ele) => {
                    if (ele.DbName === db) {
                        let db = Object.assign({}, ele);
                        category.databases.push(db);
                    }

                })

            })
        result.push(category);
        }
    );
    return result;
}
let ctatog =  xformCategories(xform,categorySet);
console.log(' xfromed result ', JSON.stringify(ctatog));