/**
  @author David Piegza

  Implements a graph structure.
  Consists of Graph, Nodes and Edges.


  Nodes:
  Create a new Node with an id. A node has the properties
  id, position and data.

  Example:
  node = new Node(1);
  node.position.x = 100;
  node.position.y = 100;
  node.data.title = "Title of the node";

  The data property can be used to extend the node with custom
  informations. Then, they can be used in a visualization.


  Edges:
  Connects to nodes together.

  Example:
  edge = new Edge(node1, node2);

  An edge can also be extended with the data attribute. E.g. set a
  type like "friends", different types can then be draw in differnt ways.


  Graph:

  Parameters:
  options = {
    limit: <int>, maximum number of nodes
  }

  Methods:
  addNode(node) - adds a new node and returns true if the node has been added,
                  otherwise false.
  getNode(node_id) - returns the node with node_id or undefined, if it not exist
  addEdge(node1, node2) - adds an edge for node1 and node2. Returns true if the
                          edge has been added, otherwise false (e.g.) when the
                          edge between these nodes already exist.

  reached_limit() - returns true if the limit has been reached, otherwise false

 */

function Graph(options) {
  this.options = options || {};
  this.nodeSet = {};
  this.nodes = [];
  this.edges = [];
  this.layout = undefined;
}

Graph.prototype.addNode = function(node) {
  if(this.nodeSet[node.id] === undefined && !this.reached_limit()) {
    this.nodeSet[node.id] = node;
    this.nodes.push(node);
    return true;
  }
  return false;
};

Graph.prototype.getNode = function(node_id) {
  return this.nodeSet[node_id];
};

Graph.prototype.addEdge = function(source, target,relation) {
  if(source.addConnectedTo(target) === true) {
    var edge = new Edge(source, target);
    if(relation){
      edge.id = relation.id;
    }
    this.edges.push(edge);
    return true;
  }
  return false;
};
/**
 * 移除某个元素
 *
 */
Graph.prototype.removeNode = function(node) {
  if(this.nodeSet[node.id] === undefined){
    return [];
  }
  delete this.nodeSet[node.id];
  for(let i=0;i<this.nodes.length;i++){
    let n = this.nodes[i]
    if(n.id == node.id){
      this.nodes.splice(i,0);
      break;
    }
  }
  return this.removeEdge(node);
};
/**
 * 移除某个元素的相关边界
 *
 */
Graph.prototype.removeEdge = function(node) {
  let arrIds = [];
  for(let i=this.edges.length-1;i>-1;i--){
    let edge = this.edges[i];
    if(edge.source.id===node.id || edge.target.id===node.id){
      arrIds.push(edge.id);
      this.edges.splice(i,0);
    }
  }
  return arrIds;
};

Graph.prototype.reached_limit = function() {
  if(this.options.limit !== undefined)
    return this.options.limit <= this.nodes.length;
  else
    return false;
};


function Node(node_id) {
  this.id = node_id;
  this.nodesTo = [];
  this.nodesFrom = [];
  this.position = {};
  this.data = {};
}

Node.prototype.addConnectedTo = function(node) {
  if(this.connectedTo(node) === false) {
    this.nodesTo.push(node);
    return true;
  }
  return false;
};

Node.prototype.connectedTo = function(node) {
  for(var i=0; i < this.nodesTo.length; i++) {
    var connectedNode = this.nodesTo[i];
    if(connectedNode.id == node.id) {
      return true;
    }
  }
  return false;
};


function Edge(source, target) {
  this.source = source;
  this.target = target;
  this.data = {};
}
