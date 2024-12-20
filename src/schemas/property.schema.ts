import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Property extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  address: string;

  @Prop({ required: false, type: MongooseSchema.Types.ObjectId, ref: 'Tenant' })
  tenantId: MongooseSchema.Types.ObjectId;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  ownerId: MongooseSchema.Types.ObjectId;

  @Prop({
    type: [{
      type: MongooseSchema.Types.ObjectId,
      ref: 'User'
    }]
  })
  assignedUsers: MongooseSchema.Types.ObjectId[];

  @Prop({ default: true })
  isActive: boolean;
}

export const PropertySchema = SchemaFactory.createForClass(Property);
PropertySchema.index({ name: 'text', address: 'text' });
PropertySchema.index({ tenantId: 1 });