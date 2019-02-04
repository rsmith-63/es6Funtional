/**
 * Created by rob on 3/26/2017.
 */
class TransformJsonResponses {
  static  xformCategories(jsonResponse, selectedDB, searchTerm) {
        const _ = require('lodash');
        const categorySet = require('./catagoryConfig');

        let categories = [];
        let response = _.cloneDeep(jsonResponse);
        // get only the array part of response and filter out the items that have no results
        response = _.get(response, 'Result.eGQueryResult.ResultItem', [])
            .filter((ele) => {
                return ele.Count != '0';
            });

        //filter out results if database was selected
        if (!(_.isNil(selectedDB)) && (selectedDB !== 'All DataBases')) {
            response = response.filter((ele) => {
                return ele.DbName == selectedDB;
            });
        }

        let result = {
            searchTerm: `${searchTerm}`,
            selectedDB: `${selectedDB}`,
            totalFound: `${response.length}`,
            categories: []
        };

        // transform to results for display

        categorySet.forEach((cat) => {
                let category = {"category": cat.category, "databases": []};
                cat.dbList.forEach((db) => {
                    response.forEach((ele) => {
                        if (ele.DbName === db) {
                            let db = Object.assign({}, ele);
                            category.databases.push(db);
                        }

                    })

                });
                // filter out category if no databases
                if (category.databases.length > 0) {
                    categories.push(category);
                }

            }
        );
        result.categories = categories;
        return result;
    }
}
let jsonResponse = {
    "Result": {
        "Term": "polio",
        "eGQueryResult": {
            "ResultItem": [
                {
                    "DbName": "pubmed",
                    "MenuName": "PubMed",
                    "Count": "25201",
                    "Status": "Ok"
                },
                {
                    "DbName": "pmc",
                    "MenuName": "PubMed Central",
                    "Count": "34433",
                    "Status": "Ok"
                },
                {
                    "DbName": "mesh",
                    "MenuName": "MeSH",
                    "Count": "4",
                    "Status": "Ok"
                },
                {
                    "DbName": "books",
                    "MenuName": "Books",
                    "Count": "1715",
                    "Status": "Ok"
                },
                {
                    "DbName": "pubmedhealth",
                    "MenuName": "PubMed Health",
                    "Count": "172",
                    "Status": "Ok"
                },
                {
                    "DbName": "omim",
                    "MenuName": "OMIM",
                    "Count": "9",
                    "Status": "Ok"
                },
                {
                    "DbName": "ncbisearch",
                    "MenuName": "Site Search",
                    "Count": "14",
                    "Status": "Ok"
                },
                {
                    "DbName": "nuccore",
                    "MenuName": "Nucleotide",
                    "Count": "4046",
                    "Status": "Ok"
                },
                {
                    "DbName": "nucgss",
                    "MenuName": "GSS",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "nucest",
                    "MenuName": "EST",
                    "Count": "14",
                    "Status": "Ok"
                },
                {
                    "DbName": "protein",
                    "MenuName": "Protein",
                    "Count": "3798",
                    "Status": "Ok"
                },
                {
                    "DbName": "genome",
                    "MenuName": "Genome",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "structure",
                    "MenuName": "Structure",
                    "Count": "32",
                    "Status": "Ok"
                },
                {
                    "DbName": "taxonomy",
                    "MenuName": "Taxonomy",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "snp",
                    "MenuName": "SNP",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "dbvar",
                    "MenuName": "dbVar",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "gene",
                    "MenuName": "Gene",
                    "Count": "3",
                    "Status": "Ok"
                },
                {
                    "DbName": "sra",
                    "MenuName": "SRA",
                    "Count": "35",
                    "Status": "Ok"
                },
                {
                    "DbName": "biosystems",
                    "MenuName": "BioSystems",
                    "Count": "223",
                    "Status": "Ok"
                },
                {
                    "DbName": "unigene",
                    "MenuName": "UniGene",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "cdd",
                    "MenuName": "Conserved Domains",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "clone",
                    "MenuName": "Clone",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "popset",
                    "MenuName": "PopSet",
                    "Count": "58",
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
                    "Count": "46",
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
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "pcsubstance",
                    "MenuName": "PubChem Substance",
                    "Count": "7",
                    "Status": "Ok"
                },
                {
                    "DbName": "pcassay",
                    "MenuName": "PubChem BioAssay",
                    "Count": "445",
                    "Status": "Ok"
                },
                {
                    "DbName": "nlmcatalog",
                    "MenuName": "NLM Catalog",
                    "Count": "1737",
                    "Status": "Ok"
                },
                {
                    "DbName": "probe",
                    "MenuName": "Probe",
                    "Count": "1",
                    "Status": "Ok"
                },
                {
                    "DbName": "gap",
                    "MenuName": "dbGaP",
                    "Count": "4",
                    "Status": "Ok"
                },
                {
                    "DbName": "proteinclusters",
                    "MenuName": "Protein Clusters",
                    "Count": "0",
                    "Status": "Term or Database is not found"
                },
                {
                    "DbName": "bioproject",
                    "MenuName": "BioProject",
                    "Count": "9",
                    "Status": "Ok"
                },
                {
                    "DbName": "biosample",
                    "MenuName": "BioSample",
                    "Count": "28",
                    "Status": "Ok"
                }
            ]
        }
    }
};
let result = TransformJsonResponses.xformCategories(jsonResponse,'All DataBases','polio');
console.log(' transform NBCI api response for UI ', JSON.stringify(result));