import { getRandomTime, shouldChance } from "../util";

export interface BlockchainRemovalData {
  id: string;

}

const removalsData: BlockchainRemovalData[] = [
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
  {
    id: 'removalsDataUuid1',
  },
]

export function getData(): Promise<BlockchainRemovalData[]> {
  return new Promise((res, rej) => {
    if (shouldChance()) {
      return rej(new Error('Blockchain is unavailable.'))
    }

    setTimeout(() => {
      return res(removalsData)
    }, getRandomTime())
  })
}
