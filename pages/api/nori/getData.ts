import { getRandomTime, shouldChance } from "../util";

export interface NoriRemovalData {
  blockchainId: string;

}

const removalsData: NoriRemovalData[] = [
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
  {
    blockchainId: 'removalsDataUuid1',
  },
]

export function getData(): Promise<NoriRemovalData[]> {
  return new Promise((res, rej) => {
    if (shouldChance()) {
      return rej(new Error('Blockchain is unavailable.'))
    }

    setTimeout(() => {
      return res(removalsData)
    }, getRandomTime())
  })
}
