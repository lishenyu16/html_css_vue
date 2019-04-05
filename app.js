new Vue({
    el:'#app',
    data:{
        expandOperator1:'+',
        expandOperator2:'+',
        expandOperator3:'+',
        expand1: false,
        expand2: false,
        expand3: false,
        isActive1:true,
        isActive2:false,
        isActive3:false,
        cat1:true,
        cat2:false,
        cat3:false,
    },
    methods:{
        expand:function(id){
            if(id=='1'){
                this.expand1=!this.expand1
                this.expandOperator1 = this.expand1? '-':'+'
            }
            if(id=='2'){
                this.expand2=!this.expand2
                this.expandOperator2 = this.expand2? '-':'+'
            }
            if(id=='3'){
                this.expand3=!this.expand3
                this.expandOperator3 = this.expand3? '-':'+'
            }
        },
        select:function(id){
            if(id=='1'){
                this.isActive1=this.cat1=true
                this.isActive2=this.cat2=false
                this.isActive3=this.cat3=false
            }
            if(id=='2'){
                this.isActive1=this.cat1=false
                this.isActive2=this.cat2=true
                this.isActive3=this.cat3=false
            }
            if(id=='3'){
                this.isActive1=this.cat1=false
                this.isActive2=this.cat2=false
                this.isActive3=this.cat3=true
            }
        }
    }
})