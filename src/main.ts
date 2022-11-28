import { ColaGenerator, VendingMachine } from '@components'
import './scss/index.scss'

const colaGenerator = new ColaGenerator()
const vendingMachine = new VendingMachine()

// await colaGenerator.setup()
colaGenerator.setup()
vendingMachine.setup()
