'use strict'

###*
 # @ngdoc service
 # @name yeomanApp.session
 # @description
 # # session
 # Factory in the yeomanApp.
###
angular.module 'yeomanApp'
  .factory 'session', ->
    # Service logic
    # ...

    meaningOfLife = 42

    # Public API here
    someMethod: ->
      meaningOfLife
