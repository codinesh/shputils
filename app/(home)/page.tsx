'use client'

import { ActionCards } from './ActionCards'

export default function Page({
  params,
  searchParams,
}: {
  params: { slug: string }
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  return <ActionCards />
}
