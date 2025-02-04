import { BASE_URL } from "./baseURL"
import { commonAPI } from "./commonAPI"


export const detilsApi = async () => {
    return await commonAPI('GET', `${BASE_URL}/portfolio/detils`)
}

export const serviceApi = async () => {
    return await commonAPI('GET', `${BASE_URL}/portfolio/services`)
}
export const allProjectApi = async () => {
    return await commonAPI('get', `${BASE_URL}/portfolio/get`)
}

export const allSkillsApi = async () => {
    return await commonAPI('get', `${BASE_URL}/portfolio/getSkills`)
}

export const getAllExperienceApi = async () => {
    return await commonAPI('get', `${BASE_URL}/portfolio/getExperiences`)
}

export const loginApi = async (users) => {
    return await commonAPI('POST', `${BASE_URL}/portfolio/login`, users, "")
}

export const addProjectAPI = async (reqBody, reqHeader) => {
    return await commonAPI('POST', `${BASE_URL}/portfolio/add`, reqBody, reqHeader)
}
