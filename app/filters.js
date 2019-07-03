module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}


  // Filter to change a number, like 1 "12" or 04, to a month in words
  //
  // Usage in your templates:
  //
  // With number with filer        {{ 1 | monthToWord }}
  // With data from previous input {{ data['dob-month'] | monthToWord }}

  filters.monthToWord = function(month) {
    var months = {
      "1":'January',
      "2":'February',
      "3":'March',
      "4":'April',
      "5":'May',
      "6":'June',
      "7":'July',
      "8":'August',
      "9":'September',
      "10":'October',
      "11":'November',
      "12":'December'
    }
    month.toString().replace(/^0+(?=\d)/, '')
    return months[month]
  }

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  return filters
}
