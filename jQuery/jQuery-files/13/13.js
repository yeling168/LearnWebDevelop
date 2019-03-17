// $(document).ready(function () {
//     var $ajaxForm = $('#ajax-form'),
//         $response = $('#response');

//     $ajaxForm.on('submit', function (event) {
//         event.preventDefault();
//         $response.load('http://api.jquery.com/#content',
//             $ajaxForm.serialize());
//     })
// })


var buildItem = function (item) {
    var title = item.name,
        args = [],
        output = '<li>';
    if (item.type == 'method' || !item.type) {
        if (item.signatures[0].params) {
            $.each(item.signatures[0].params, function (index, val) {
                args.push(val.name);
            });
        }
        title = (/^jQuery|deferred/).test(title) ? title : '.' + title;
        title += '(' + args.join(', ') + ')';
    } else if (item.type == 'selector') {
        title += ' selector';
    }
    output += '<h3><a href="' + item.url + '">' + title + '</a></h3>';
    output += '<div>' + item.desc + '</div>';
    output += '</li>';
    return output;
}
//收获JSONP数据
$(document).ready(function () {
    var $ajaxForm = $('#ajax-form'),
        $response = $('#response'),
        noresults = 'There were no search results.',
        failed = 'Sorry, but the request could not ' +
        'reach its destination. Try again later.';

    var response = function (json) {
        var output = '';
        if (json && json.length) {
            output += '<ol>';
            $.each(json, function (index, val) {
                output += buildItem(val);
            });
            output += '</ol>';
        } else {
            output += noresults;
        }
        $response.html(output);
    };
    var searchTimeout, searchDelay = 300;
    $('#title').on('keyup', function (event) {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(function () {
            $ajaxForm.triggerHandler('submit');
        }, searchDelay);
    });
    $.ajaxSetup({
        accepts: {
            yaml: 'application/x-yaml, text/yaml'
        },
        contents: {
            yaml: /yaml/
        },
        converters: {
            'text yaml': function (textValue) {
                var result = YAML.eval(textValue);
                var errors = YAML.getErrors();
                if (errors.length) {
                    throw errors;
                }
                return result;
            }
        }
    });


    $.ajaxPrefilter(function (options) {
        if (/\.yml$/.test(options.url)) {
            return 'yaml';
        }
    })



    $(document).on('click', '#categories a', function (event) {
        event.preventDefault();
        $(this).parent().toggleClass('active')
            .siblings('.active').removeClass('active');
        $('#ajax-form').triggerHandler('submit');
    });


    //自定义传输对象
    $.ajaxTransport('img', function (settings) {
        var $img, img, prop;

        return {
            send: function (headers, complete) {
                function callback(success) {
                    if (success) {
                        complete(200, 'OK', {
                            img: img
                        });
                    } else {
                        $img.remove();
                        complete(404, 'Not Found');
                    }
                }

                $img = $('<img>', {
                    src: settings.url
                });
                img = $img[0];
                prop = typeof img.naturalWidth === 'undefined' ? 'width' : 'naturalWidth';
                if (img.complete) {
                    callback(img[prop]);
                } else {
                    $img.on('load error', function (event) {
                        callback(event.type == 'load');
                    });
                }
            },
            abort: function () {
                if ($img) {
                    $img.remove();
                }
            }
        }
    });

    $.ajax({
        url: 'sunset.jpg',
        dataType: 'img'
    }).done(function (img) {
        $('<div></div>', {
            id: 'picture',
            html: img
        }).appendTo('body');
    }).fail(function (xhr, textStatus, msg) {
        $('<div></div>', {
            id: 'picture',
            html: textStatus + ': ' + msg
        }).appendTo('body');
    });

    $.getScript('yaml.js').done(function () {
        $.ajax({
            url: 'categories.yml',
            dataType: 'yaml'
        }).done(function (data) {
            var cats = '';
            $.each(data, function (category, subcategories) {
                cats += '<li><a href="#">' + category + '</a></li>';
            });
            $(document).ready(function () {
                var $cats = $('#categories').removeClass('hide');
                $('<ul></ul>', {
                    html: cats
                }).appendTo($cats);
            });
        });
    });
    $.ajax({
        url: 'categories.yml',
        dataType: 'yaml'
    });
    var api = {};
    $ajaxForm.on('submit', function (event) {
        event.preventDefault();
        var title = $('#title').val(),
            category = $('#categories').find('li.active').text();
        search = category + '-' + title;
        if (search == '-') {
            return;
        }
        $response.addClass('loading').empty();
        if (api[search]) {
            api[search] = $.ajax({
                url: 'http://book.learningjquery.com/api/',
                dataType: 'jsonp',
                data: {
                    title: title,
                    category: category
                },
                timeout: 15000,
            });
        }
        api[search].done(response).fail(function () {
            $response.html(failed);
        }).always(function () {
            $response.removeClass('loading');
        })
    });
})