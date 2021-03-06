"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NyaaProvider = void 0;
const nyaapi_1 = require("nyaapi");
const _1 = require(".");
class NyaaProvider extends _1.Provider {
    async getMeta() {
        return {
            categories: [
                {
                    "name": "Anime",
                    "id": "1_0",
                    "subcategories": [
                        {
                            "name": "AMV",
                            "id": "1_1"
                        },
                        {
                            "name": "English",
                            "id": "1_2"
                        },
                        {
                            "name": "Non-English",
                            "id": "1_3"
                        },
                        {
                            "name": "Raws",
                            "id": "1_4"
                        }
                    ]
                },
                {
                    "name": "Audio",
                    "id": "2_0",
                    "subcategories": [
                        {
                            "name": "Audio - Lossless",
                            "id": "2_1"
                        },
                        {
                            "name": "Audio - Lossy",
                            "id": "2_2"
                        }
                    ]
                },
                {
                    "name": "Literature",
                    "id": "3_0",
                    "subcategories": [
                        {
                            "name": "Literature - English",
                            "id": "3_1"
                        },
                        {
                            "name": "Literature - Non-English",
                            "id": "3_2"
                        },
                        {
                            "name": "Literature - Raws",
                            "id": "3_3"
                        }
                    ]
                },
                {
                    "name": "Live Action",
                    "id": "4_0",
                    "subcategories": [
                        {
                            "name": "Live Action - English",
                            "id": "4_1"
                        },
                        {
                            "name": "Live Action - Idol/PV",
                            "id": "4_2"
                        },
                        {
                            "name": "Live Action - Non-English",
                            "id": "4_3"
                        },
                        {
                            "name": "Live Action - Raws",
                            "id": "4_4"
                        }
                    ]
                },
                {
                    "name": "Pictures",
                    "id": "5_0",
                    "subcategories": [
                        {
                            "name": "Pictures - Graphics",
                            "id": "5_1"
                        },
                        {
                            "name": "Pictures - Photos",
                            "id": "5_2"
                        }
                    ]
                },
                {
                    "name": "Software",
                    "id": "6_0",
                    "subcategories": [
                        {
                            "name": "Software - Apps",
                            "id": "6_1"
                        },
                        {
                            "name": "Software - Games",
                            "id": "6_2"
                        }
                    ]
                }
            ],
            features: [
                _1.ProviderFeatures.SEARCH
            ]
        };
    }
    async search(query, options) {
        const { category, limit } = options || {};
        const result = await nyaapi_1.si.search(query, limit, {
            category: category
        });
        return result.map(v => ({
            name: v.name,
            magnet: v.magnet,
            seeds: parseInt(v.seeders, 10) || 0,
            peers: parseInt(v.leechers, 10) || 0,
            size: v.filesize,
            time: v.date,
            downloads: parseInt(v.completed, 10) || 0
        }));
    }
}
exports.NyaaProvider = NyaaProvider;
NyaaProvider.providerName = 'Nyaa';
