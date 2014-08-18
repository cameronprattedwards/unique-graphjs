(function (root, factory) {
	if (typeof define == "function" && define.amd)
		define(["graphjs/constructWithArgs", "entity-context/Context"], factory);
	else if (typeof exports == "object")
		module.exports = factory(require("graphjs/constructWithArgs"), require("entity-context/Context"));
	else
		root.Graph = factory(root.constructWithArgs);
}(function (Graph, Context) {
	var UniqueGraph = Object.create(Graph);

	UniqueGraph.parseOther = function (Type, rawData) {
		return Context.get(Type, rawData);
	}

	return UniqueGraph;
}));