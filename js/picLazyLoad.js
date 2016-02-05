 ;(function($){
    //默认参数
    var defaults = {
        threshold:0,
        placeholder: 'blank.png'
    }
    $.fn.picLazyLoad = function(options){
        
        //缓存变量
        var _this = $(this),
            _winScrollTop = 0,
            _winHeight = $(window).height();
        
        var initLoad = {
            /*
                合并参数列表
                加载首屏图片，滚动时载入进入视区图片
            */
            init: function(){
                options = $.extend({},defaults,options);
                this.lazyLoadPic();
                this.scrollLoadPic();
            },
            scrollLoadPic: function(){
                var self = this;
                $(window).on('scroll',function(){
                    _winScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
                    self.lazyLoadPic();
                });
            },
            lazyLoadPic: function(){
                _this.each(function(){
                    var $self = $(this);
                    // 如果是img
                    if($self.is('img')){
                        if($self.attr('data-original')){
                            var _offsetTop = $self.offset().top;
                            if((_offsetTop - options.threshold) <= (_winHeight + _winScrollTop)){
                                $self.attr('src',$self.attr('data-original'));
                                $self.removeAttr('data-original');
                            }
                        }
                    // 如果是背景图
                    }else{
                        if($self.attr('data-original')){
                            // 默认占位图片
                            if($self.css('background-image') == 'none'){
                                $self.css('background-image','url('+options.placeholder+')');
                            }
                            var _offsetTop = $self.offset().top;
                            if((_offsetTop - options.threshold) <= (_winHeight + _winScrollTop)){
                                $self.css('background-image','url('+$self.attr('data-original')+')');
                                $self.removeAttr('data-original');
                            }
                        }
                    }
                });
            }
        }
        initLoad.init();
    }
})(Zepto);
