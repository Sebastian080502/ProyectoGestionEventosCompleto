import { S3Client } from "@aws-sdk/client-s3";
import { Injectable } from "@nestjs/common";
import {env} from "process";
Injectable ();
export class UploaderService {
    private client:S3Client;
    private bucketName: string;
}