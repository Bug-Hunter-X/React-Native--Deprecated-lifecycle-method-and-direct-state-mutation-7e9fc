# React Native Bug: Deprecated Lifecycle and Direct State Mutation

This repository demonstrates a common bug in React Native applications involving the use of deprecated lifecycle methods and direct state mutation.

The `bug.js` file contains the erroneous code. The `bugSolution.js` file provides a corrected version.

**Key Issues:**

*   **Deprecated `componentWillMount`:** This lifecycle method is deprecated and should be replaced with `componentDidMount` or a functional component's equivalent.
*   **Direct State Mutation:** Directly modifying `this.state` can lead to inconsistencies and performance problems. The `setState` method must always be used to update state.

**Solution:**

The corrected code uses `componentDidMount`, correctly updates the state with `setState`, and demonstrates the use of functional components as a modern alternative.  Refer to the `bugSolution.js` file for the corrected code.