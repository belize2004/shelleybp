import {client} from '@/sanity/lib/client'
import {Root} from '../types'
import {axiosInstance} from './instance'
import {queryOptions} from '@tanstack/react-query'

export const family = queryOptions({
  queryKey: ['family-portrait'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=family-portrait`
    )

    return response.data
  }
})

export async function getFamilyPortraits() {
  try {
    const familyPortraits = await client.fetch(
      '*[_type == "category" && name == "family-portraits"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return familyPortraits
  } catch (error) {
    return []
  }
}

export const inte = queryOptions({
  queryKey: ['interior-design'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=interior-design`
    )

    return response.data
  }
})

export const reale = queryOptions({
  queryKey: ['real-estate'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=real-estate`
    )

    return response.data
  }
})

export async function getShortTermRental() {
  try {
    const shortTermRentals = await client.fetch(
      '*[_type == "category" && name == "short-term-rental"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return shortTermRentals
  } catch (error) {
    return []
  }
}

export const sh = queryOptions({
  queryKey: ['short'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=short-term-rental`
    )

    return response.data
  }
})

export async function getEngagementSessions() {
  try {
    const engagementSessions = await client.fetch(
      '*[_type == "category" && name == "engagement-sessions"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return engagementSessions
  } catch (error) {
    return []
  }
}

export const engage = queryOptions({
  queryKey: ['engagement'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=engagement-sessions`
    )

    return response.data
  }
})

export async function getSeniorPortraits() {
  try {
    const seniorPortraits = await client.fetch(
      '*[_type == "category" && name == "senior-portraits"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return seniorPortraits
  } catch (error) {
    return []
  }
}
export async function getFamilyPhotography() {
  try {
    const pensacolaFamilyPhotography = await client.fetch(
      '*[_type == "category" && name == "pensacola-family-photography"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return pensacolaFamilyPhotography
  } catch (error) {
    return []
  }
}

export const senior = queryOptions({
  queryKey: ['senior-portrait'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=senior-portraits`
    )

    return response.data
  }
})

export const micro = queryOptions({
  queryKey: ['micro'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=micro-wedding`
    )

    return response.data
  }
})

export async function getMicroWeddings() {
  try {
    const microWeddings = await client.fetch(
      '*[_type == "category" && name == "micro-wedding"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return microWeddings
  } catch (error) {
    return []
  }
}

export const wall = queryOptions({
  queryKey: ['wall'],
  queryFn: async () => {
    const response = await axiosInstance.get<Root>(
      `/categories?populate[photos][populate]=*&populate[blogs][populate]=*&filters[name][$eq]=wall-art-by-shelley`
    )

    return response.data
  }
})

export async function getWallArt() {
  try {
    const wallArt = await client.fetch(
      '*[_type == "category" && name == "wall-art"][0]',
      {},
      {next: {revalidate: 600}}
    )
    return wallArt
  } catch (error) {
    return []
  }
}
