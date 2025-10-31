import React from "react";

export default function DockerK8sArticle() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 py-12 px-6">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-12 border-b border-gray-800 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Docker vs Kubernetes: Understanding the Difference & Integration
          </h1>
          <p className="text-gray-400 text-lg">
            A comprehensive guide on containerization and orchestration for modern DevOps
          </p>
        </header>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Introduction</h2>
            <p>
              Docker and Kubernetes are foundational technologies in modern software deployment. While both
              deal with containers, they serve distinct purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Docker:</strong> Containerizes applications, providing isolated environments that run consistently across platforms.
              </li>
              <li>
                <strong>Kubernetes (K8s):</strong> Orchestrates and manages containers at scale, handling deployment, scaling, and resilience.
              </li>
            </ul>
          </section>

          {/* Docker Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Docker</h2>
            <p>
              Docker allows developers to package applications and dependencies into a single container image. This
              ensures that the application runs consistently regardless of the host environment.
            </p>
            <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
              <code className="text-cyan-400 font-mono">
                {`# Dockerfile example
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["node", "index.js"]`}
              </code>
            </pre>
          </section>

          {/* Kubernetes Section */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Kubernetes</h2>
            <p>
              Kubernetes is an orchestration platform that manages multiple containers across clusters.
              It handles load balancing, scaling, self-healing, and deployment automation.
            </p>
            <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
              <code className="text-cyan-400 font-mono">
                {`# Kubernetes Deployment example
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: my-app
        image: my-app-image:latest
        ports:
        - containerPort: 3000`}
              </code>
            </pre>
          </section>

          {/* Docker vs Kubernetes */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Docker vs Kubernetes</h2>
            <p>
              While Docker handles individual containers, Kubernetes manages multiple containers in a cluster.
              Key differences include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                <strong>Scope:</strong> Docker is about building and running containers, Kubernetes is about orchestration.
              </li>
              <li>
                <strong>Scaling:</strong> Docker alone cannot scale applications automatically; Kubernetes can scale pods horizontally.
              </li>
              <li>
                <strong>Resilience:</strong> Kubernetes can restart containers, replicate them, and handle failures; Docker relies on manual intervention.
              </li>
            </ul>
          </section>

          {/* Using Together */}
          <section className="space-y-4">
            <h2 className="text-3xl font-bold text-white mt-8 mb-4">Using Docker and Kubernetes Together</h2>
            <p>
              Docker and Kubernetes complement each other perfectly. Typical workflow:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Build your application container using Docker.</li>
              <li>Push the Docker image to a container registry (Docker Hub, AWS ECR, etc.).</li>
              <li>Create Kubernetes Deployment and Service manifests pointing to your Docker image.</li>
              <li>Apply manifests to a Kubernetes cluster (local via Minikube or cloud-based via AWS, GCP, Azure).</li>
              <li>Use Kubernetes to scale, monitor, and manage your containerized application.</li>
            </ol>
            <pre className="bg-gray-900 p-4 rounded border border-gray-800 overflow-x-auto text-sm">
              <code className="text-cyan-400 font-mono">
                {`# Build Docker image
docker build -t my-app-image:latest .

# Push to registry
docker push my-app-image:latest

# Deploy to Kubernetes
kubectl apply -f deployment.yaml
kubectl get pods
kubectl scale deployment my-app --replicas=5`}
              </code>
            </pre>
          </section>

          {/* Conclusion */}
          <section className="space-y-4 border-t border-gray-800 pt-8 mt-12">
            <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
            <p>
              Docker provides the containerization foundation, while Kubernetes enables orchestration at scale.
              Together, they allow developers to build, deploy, and manage resilient applications efficiently.
            </p>
            <p className="text-gray-400 italic">
              <strong>Tip:</strong> Start by containerizing with Docker, then gradually introduce Kubernetes for scaling and orchestration.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}
