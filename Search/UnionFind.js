class UnionFind {

	constructor(n) {
		this.sze = new Array(n);
		this.parent = new Array(n);
		this.n = n;
    this.cnt=n;
		this.makeSet();
	}

	makeSet() {
		for (let i = 0; i < this.n; i++) {
			this.parent[i] = i;
      this.sze[i] = 1;
		}
	}

  // Returns the number of elements of uf object.
  size = function () {
    return this.parent.length;
  }

  // Returns the number of distinct groups left inside the object.
  count = function () {
    return this.cnt;
  }

	find(x) {
		if (this.parent[x] !== x) {
			this.parent[x] = this.find(this.parent[x]);
		}
		return this.parent[x];
	}

  // Returns true if p and p are both in same group, false otherwise.
  connected = function (p, q) {
    return this.find(p) === this.find(q)
  }

	union(x, y) {
		let a = this.find(x);
		let b = this.find(y);

		if (a === b) return;

    if(this.sze[a]>=this.sze[b]){
      this.parent[b]=a;
      this.sze[a]+=this.sze[b];
    }else{
      this.parent[a]=b;
      this.sze[b]+=this.sze[a];
    }
    this.cnt--;
	}
}


export { UnionFind }
