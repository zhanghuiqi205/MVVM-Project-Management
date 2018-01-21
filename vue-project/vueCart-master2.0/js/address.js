new Vue({
    el: '.container',
    data: {
        limitNum: '3',
        addressList: [],
        currentIndex: '',
        shippingMethod:1
    },
    mounted: function () {
        this.$nextTick(function () {
            this.getAddressList();
        });
    },
    computed: {
        filterAddress: function () {
            return this.addressList.slice(0, this.limitNum);
        }
    },
    methods: {
        getAddressList: function () {
            this.$http.get('data/address.json').then(response=> {
                var res = response.data;
                if (res.status == "0") {
                    this.addressList = res.result;
                }
            })
        },
        loadMore: function () {
            if (this.limitNum != this.addressList.length) {
                this.limitNum = this.addressList.length;
            } else {
                this.limitNum = 3;
            }

        },
        setDefault: function (addressId) {
            this.addressList.forEach(function (item, index) {
                if (item.addressId == addressId) {
                    item.isDefault = true;
                } else {
                    item.isDefault = false;
                }
            })
        }
    }
});
