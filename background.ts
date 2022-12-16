import type { SkebUserResponse, TwitterMessage } from "~lib"

export {}

async function getSkebProfileInfo(
  uid: string
): Promise<SkebUserResponse | null> {
  const response = await fetch(
    `https://skeb.jp/api/users/exists?twitter_uid=${uid}`,
    {
      headers: {
        Accept: "application/json"
      }
    }
  )
  try {
    const r = await response.json()
    return r
  } catch {
    return null
  }
}

chrome.runtime.onMessage.addListener((message, _, sendMessage) => {
  console.log(message)
  const spi = getSkebProfileInfo((message as TwitterMessage).id)
  spi
    .then((e) => {
      console.log(e)
      if (!!e) {
        console.log("sendMessage")
        sendMessage(e)
      }
    })
    .catch(console.error)
  return true
})
