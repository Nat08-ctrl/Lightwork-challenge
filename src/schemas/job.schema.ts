import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export enum JobStatus {
  ACTIVE = 'active',
  PENDING = 'pending',
  COMPLETED = 'completed',
}

@Schema({ timestamps: true })
export class Job extends Document {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop({ required: true, type: String, enum: JobStatus, default: JobStatus.PENDING })
  status: JobStatus;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Property' })
  propertyId: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  assignedTo: MongooseSchema.Types.ObjectId;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Tenant' })
  tenantId: MongooseSchema.Types.ObjectId;
}

export const JobSchema = SchemaFactory.createForClass(Job);
JobSchema.index({ tenantId: 1, status: 1 });