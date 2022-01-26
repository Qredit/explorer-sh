import { Menu } from '@headlessui/react'
import { useContext } from 'react'
import { BlockchainContext } from '../../BlockchainContext'
import { Blockchains } from '../../lib/blockchains'



export function BlockchainMenu() {
  let current_blockchain = useContext(BlockchainContext)

  function handleNetwork() {
    
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="border border-[#ffffff] p-1 rounded  text-[#ffffff] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 py-1 px-2 focus:ring-white flex font-bold">{current_blockchain}</Menu.Button>
      <Menu.Items className="absolute right-0  w-72 mt-2 origin-top-right rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none drop-shadow z-10">
       
        {Object.values(Blockchains).map((blockchain) => (
                    <Menu.Item>
                        <div className="h-15 px-2 py-2 bg-primary dark:bg-dark-primary text-black dark:text-white flex cursor-pointe br hover:bg-tertiary dark:hover:bg-dark-tertiary cursor-pointer">
                      <img src={blockchain.logo} className="h-6 px-2 flex-none" alt="" />
                      <span className="text-lg grow">{blockchain.title}</span>
                        {Object.keys(blockchain.networks).map((network) => (
                          <a href="#" className="ml-3 bg-secondary dark:bg-dark-secondary hover:bg-greenish p-2 rounded" onClick={handleNetwork}>{network}</a>
                        ))}
                        </div>                      
                      </Menu.Item>
                  ))}
      </Menu.Items>
    </Menu>
  )
}

export default BlockchainMenu