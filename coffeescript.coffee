Beer = (name) ->
  @name = name

  $('.drink').bind 'click', (event) =>
    alert "Drinking #{@name}"
