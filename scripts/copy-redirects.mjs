import {copyFileSync, existsSync, mkdirSync} from 'node:fs'
import {dirname, resolve} from 'node:path'

const source = resolve('_redirects')
const target = resolve('dist/_redirects')

if (existsSync(source)) {
  mkdirSync(dirname(target), {recursive: true})
  copyFileSync(source, target)
}
