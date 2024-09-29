/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { MessageWhereUniqueInput } from "../../message/base/MessageWhereUniqueInput";
import { Type } from "class-transformer";
import { NodeWhereUniqueInput } from "../../node/base/NodeWhereUniqueInput";

@InputType()
class KeyFragmentCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  fragmentData?: string | null;

  @ApiProperty({
    required: false,
    type: () => MessageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => MessageWhereUniqueInput)
  @IsOptional()
  @Field(() => MessageWhereUniqueInput, {
    nullable: true,
  })
  message?: MessageWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => NodeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => NodeWhereUniqueInput)
  @IsOptional()
  @Field(() => NodeWhereUniqueInput, {
    nullable: true,
  })
  node?: NodeWhereUniqueInput | null;
}

export { KeyFragmentCreateInput as KeyFragmentCreateInput };
