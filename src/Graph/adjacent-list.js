//@ts-check
/**
 * Insert：O(1)
 * Lookup: O(1)：若有 collision 發生，lookup 的時間複雜度就可能會變成 O(n)
 * Delete: O(1)
 * Search: O(1)：透過 hash function 直接找出該 key 對應的 value
 * Hash Table 常用在儲存使用者的 Email、使用者資料。
 * 缺點：除非在同一個 bucket 內，否則資料（Node）之間不會彼此參照。
 */

// Adjacent list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  /** @param {number} vertex */
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  /**
   * @param {number} source @param {number} destination **/
  addEdge(source, destination) {
    if (!this.adjacencyList[source]) this.addVertex(source);
    if (!this.adjacencyList[destination]) this.addVertex(destination);
    this.adjacencyList[source].push(destination);
    this.adjacencyList[destination].push(source);
  }

  /**
   * @param {number} source
   * @param {number} destination
   **/
  removeEdge(source, destination) {
    if (this.adjacencyList[source]) {
      this.adjacencyList[source] = this.adjacencyList[source].filter(
        /** @param {number} adjacentVertex */
        (adjacentVertex) => adjacentVertex !== destination,
      );
    }
    if (this.adjacencyList[destination]) {
      this.adjacencyList[destination] = this.adjacencyList[destination].filter(
        /** @param {number} adjacentVertex */
        (adjacentVertex) => adjacentVertex !== source,
      );
    }
  }

  /** @param {number} vertex */
  removeVertex(vertex) {
    // Remove all of edge of vertex that store in other vertices
    while (this.adjacencyList[vertex]) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    // Remove the vertex itself
    delete this.adjacencyList[vertex];
  }

  // printGraph()

  /** @param {number} start */
  bfs(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(
        /** @param {number} neighbor */
        (neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        },
      );
    }
    return result;
  }

  /** @param {number} start */
  dfs(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach(
        /** @param {number} neighbor */
        (neighbor) => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            stack.push(neighbor);
          }
        },
      );
    }

    return result;
  }

  /**
   * @param {number} start
   * @description
   *   The recursive version of DFS,
   *   but this as same as iterative version,
   *   cause this using function stack of system.
   * */
  dfsRecursive(start) {
    const result = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfsHelper(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);

      adjacencyList[vertex].forEach(
        /** @param {number} neighbor */
        (neighbor) => {
          if (!visited[neighbor]) {
            return dfsHelper(neighbor);
          }
        },
      );
    })(start);

    return result;
  }
}

// const IGraph = new Graph(3);

export default Graph;
