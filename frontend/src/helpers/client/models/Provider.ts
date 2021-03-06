/* tslint:disable */
/* eslint-disable */
/**
 * Torrents Stream Server
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime'
import {
    ProviderCategory,
    ProviderCategoryFromJSON,
    ProviderCategoryFromJSONTyped,
    ProviderCategoryToJSON,
    ProviderFeature,
    ProviderFeatureFromJSON,
    ProviderFeatureFromJSONTyped,
    ProviderFeatureToJSON,
} from './'

/**
 *
 * @export
 * @interface Provider
 */
export interface Provider {
    /**
     *
     * @type {string}
     * @memberof Provider
     */
    name: string
    /**
     *
     * @type {Array<ProviderCategory>}
     * @memberof Provider
     */
    categories: Array<ProviderCategory>
    /**
     *
     * @type {Array<ProviderFeature>}
     * @memberof Provider
     */
    features: Array<ProviderFeature>
}

export function ProviderFromJSON(json: any): Provider {
    return ProviderFromJSONTyped(json, false)
}

export function ProviderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Provider {
    if (json === undefined || json === null) {
        return json
    }
    return {
        name: json['name'],
        categories: (json['categories'] as Array<any>).map(ProviderCategoryFromJSON),
        features: (json['features'] as Array<any>).map(ProviderFeatureFromJSON),
    }
}

export function ProviderToJSON(value?: Provider | null): any {
    if (value === undefined) {
        return undefined
    }
    if (value === null) {
        return null
    }
    return {
        name: value.name,
        categories: (value.categories as Array<any>).map(ProviderCategoryToJSON),
        features: (value.features as Array<any>).map(ProviderFeatureToJSON),
    }
}
