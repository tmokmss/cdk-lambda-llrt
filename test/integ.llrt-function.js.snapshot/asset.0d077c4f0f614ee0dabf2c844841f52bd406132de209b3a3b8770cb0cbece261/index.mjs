import{ListBucketsCommand as t,S3Client as e}from"@aws-sdk/client-s3";var o=new e({}),c=async(s,r)=>{let n=await o.send(new t({}));console.log(n)};export{c as handler};
