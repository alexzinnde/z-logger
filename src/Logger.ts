import chalk from 'chalk'

class Logger {
  private _prefix: string
  private _incldudeDateStamp: boolean
  constructor(prefix?: string, includeDateStamp = true) {
    this._prefix = prefix !== undefined ? `[${prefix}]` : ''
    this._incldudeDateStamp = includeDateStamp
  }

  info(message: any, ...args: any[]) {
    console.log(chalk.whiteBright(this.formatString(message, args)))
  }

  warn(message: string, ...args: any[]) {
    console.log(chalk.bold.yellow(this.formatString(message, args)))
  }

  error(message: string, ...args: any[]) {
    console.log(chalk.bold.redBright(this.formatString(message, args)))
  }

  formatString(message: any, ...args: any[]) {
    const dateStamp = `[${new Date().toISOString()}]`
    let extraArguments = ''

    if (args.length) {
      extraArguments = this.formatArgs.call(this, args)
    }

    return `${this._incldudeDateStamp && dateStamp} ${this._prefix && this._prefix} ${message}${extraArguments}`
  }

  formatArgs(args: any[]) {
    let textString = ''
    args.forEach((arg) => {
      if (Array.isArray(arg)) {
        textString += ' ' + JSON.stringify(arg)
      } else if (typeof arg === 'object') {
        textString += JSON.stringify(arg, null, 2).substring(1, -1)
      } else {
        textString += ' ' + arg
      }
    })

    return textString
  }
}

export default Logger
