import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export enum UserRole {
  ADMIN = 'admin',
  PROPERTY_MANAGER = 'property_manager',
  MAINTENANCE_STAFF = 'maintenance_staff',
  TENANT = 'tenant',
}

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, type: String, enum: UserRole })
  role: UserRole;

  @Prop({ required: true, type: MongooseSchema.Types.ObjectId, ref: 'Tenant' })
  tenantId: MongooseSchema.Types.ObjectId;

  @Prop({ default: true })
  isActive: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({ email: 1, tenantId: 1 }, { unique: true });