let myMixin = {
	data: function() {
		return {
			message: 'hello',
			foo: 'abc'
		}
	},
	created(){
		this.print();
	},
	methods: {
		print() {
			console.log('hello from myMinx')
		}
	},
}

export default myMixin;