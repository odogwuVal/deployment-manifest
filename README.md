# deployment-manifest
Given the two node pools with different resource configurations,
Since your application requires 2.5 GB of memory, deploying it in the node pool with 3GB of memory seems like the more suitable option. This choice ensures that your application will have enough memory to run without any issues.

The application's memory requirement (2.5 GB) fits comfortably within the node pool's available memory (3 GB) and allows room for other system processes or applications to run on the same node.
The CPU requirement of 0.5 CPU is also within the capacity of the pool (2 CPU).

Kubernetes' scheduler will attempt to find nodes that meet the resource requirements we specified, and we have provided accurate resource requests to ensure the applications run reliably and efficiently.
