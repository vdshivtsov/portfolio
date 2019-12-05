$( document ).ready(function() {
    //в этом объекте хранится история и методы работы с ним
     var history = {
        //временная переменная, в которой хранится начальное значение элемента формы, на который сработал фокус 
        tmp: {},
        //определяем структуру stack и методы работы с ним
        stack: {
            _size: 0,
            _storage: {},

            push: function(data) {
                var size = ++this._size;
                this._storage[size] = data;
            },

            pop: function() {
                var size = this._size,
                    deletedData;
             
                if (size) {
                    deletedData = this._storage[size];
             
                    delete this._storage[size];
                    this._size--;
             
                    return deletedData;
                }
            }
        },
        //установить значение tmp, чтобы добавить его в историю, если поле изменится
        tmpSet:function( targetParam, valueParam ) {
            tmp = {target: targetParam, val: valueParam};
        },
        //сохранить в историю изменение поля формы
        save:function() {
            this.stack.push(tmp);
        },
        //отменить действие в последнем измененном поле
        undo:function(){
            var d = this.stack.pop();
            d.target.val(d.val);
        }
    };

    $( "input" ).focus(function( event ) {
        history.tmpSet( $(this), $(this).val() );
    });

    $( "input" ).change(function( event ) {
        history.save();
    });

    $( "#undo" ).click(function( event ) {
        history.undo();
    });
 
});