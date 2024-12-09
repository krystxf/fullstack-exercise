# Applifting Blog Engine fullstack exercise

### My solution

credentials:

```
name: Krystof Kratky
password: hoczeh-zefho4-Kansah
NEXT_PUBLIC_API_KEY=d47749f8-569d-42cb-8269-9c53930e9d1c
```

For the Applifting Blogging Engine exercise, I developed the frontend using Next.js with a focus on performance and scalability:

- SEO: SSR for better search engine visibility and pre-rendered metadata.
- Custom Image Endpoint: Created a proxy to add required headers for the Applifting API while preserving Next.js image optimization features.
- Deployment: Hosted on Vercel for fast, scalable, and seamless production deployment.
- Future Multitenancy: could be added in few simple steps, multitenancy could easily be added by nesting routes under [tenant-id] and dynamically applying tenant-specific logic.

### Relevant links

- [Assignment](https://github.com/Applifting/fullstack-exercise/blob/master/assignment.md)
- [Prototype](https://www.figma.com/proto/VagZOrr3TjTAxGCpCUTSrO/Applifting-%7C-Full-Stack-Cvi%C4%8Den%C3%AD?node-id=2%3A3&viewport=148%2C245%2C0.12103988230228424&scaling=min-zoom)
- [Screens](https://www.figma.com/file/VagZOrr3TjTAxGCpCUTSrO/Applifting-|-Full-Stack-Cvičení)
- [OpenAPI specification](https://github.com/Applifting/fullstack-exercise/blob/master/api.yml)
- [JSON schema specification for WebSocket API](https://github.com/Applifting/fullstack-exercise/blob/master/ws.json)
- [Deployed Backend](https://fullstack.exercise.applifting.cz) `https://fullstack.exercise.applifting.cz`
