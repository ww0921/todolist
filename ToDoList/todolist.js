var app = new Vue({
    el: "#todolist",
    data: {
        list: [],
        inputValue: "",
    },
    methods: {
        add: function () {
            this.list.push({
                title: this.inputValue,
                checked: false
            });
            this.inputValue = "";
        },
        remove: function (index) {
            // console.log('删除');
            this.list.splice(index, 1);
        },
        getData:function(){
            window.localStorage.setItem('storeData',list.value)
        }
    }
})



