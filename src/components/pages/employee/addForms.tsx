import { InputField } from "@/components/utils/InputField";
import { SelectField } from "@/components/utils/SelectField";
import { EmployeeType } from "@/modules/Employee";
import { SelectDataTypes } from "@/types/structureTypes";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  Grid,
  Stack,
} from "@mui/material";
import Image from "next/image";
import { FieldErrors, UseFormRegister } from "react-hook-form";

interface Props {
  register: UseFormRegister<EmployeeType>;
  errors: FieldErrors<EmployeeType>;
}

const PersonalInfo = (props: Props) => {
  const { register, errors } = props;
  const photoSize = 250;
  const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Homme",
      value: "h",
    },
    {
      labelText: "Femme",
      value: "f",
    },
  ];
  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Box>
        <Stack spacing={2}>
          <Card sx={{ width: photoSize, height: photoSize }}>
            <Image
              alt=""
              width={photoSize}
              height={photoSize}
              src={"/utils/goat.jpg"}
            />
          </Card>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            spacing={2}
          >
            <Button variant="outlined" color="error">
              reset
            </Button>
            <Button variant="outlined" color="primary">
              upload
            </Button>
          </Stack>
        </Stack>
      </Box>
      <Box flex={1}>
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <InputField
              label="Nom"
              formRegistartion={register("name")}
              isError={errors?.name ? true : false}
              errorMessage={errors?.name?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label="Prenom"
              formRegistartion={register("last_name")}
              isError={errors?.last_name ? true : false}
              errorMessage={errors?.last_name?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label="Email"
              type="email"
              formRegistartion={register("email")}
              isError={errors?.email ? true : false}
              errorMessage={errors?.email?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label="Numéro de téléphone"
              formRegistartion={register("phone")}
              isError={errors?.phone ? true : false}
              errorMessage={errors?.phone?.message}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label="Date de naissance"
              formRegistartion={register("birthday")}
              isError={errors?.birthday ? true : false}
              errorMessage={errors?.birthday?.message}
              type="date"
            />
          </Grid>

          <Grid item xs={6}>
            <SelectField
              label={"Genre"}
              selectData={emplacementList}
              formRegistartion={register("sexe")}
              isError={errors?.sexe ? true : false}
              errorMessage={errors?.sexe?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const ProfessionalInfo = (props: Props) => {
  const { register, errors } = props;

  const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Homme",
      value: 1,
    },
    {
      labelText: "Femme",
      value: 2,
    },
  ];
  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Box flex={1}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <SelectField
              label={"Departement"}
              formRegistartion={register("department_id")}
              isError={errors?.department_id ? true : false}
              errorMessage={errors?.department_id?.message}
              selectData={emplacementList}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              label={"Poste"}
              formRegistartion={register("position_id")}
              isError={errors?.position_id ? true : false}
              errorMessage={errors?.position_id?.message}
              selectData={emplacementList}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              label={"Superviseur"}
              formRegistartion={register("supervisor_id")}
              isError={errors?.supervisor_id ? true : false}
              errorMessage={errors?.supervisor_id?.message}
              selectData={emplacementList}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              label={"Horaire de Travail "}
              formRegistartion={register("shift_id")}
              isError={errors?.shift_id ? true : false}
              errorMessage={errors?.shift_id?.message}
              selectData={emplacementList}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              label="Date d'Embauche"
              formRegistartion={register("hire_date")}
              isError={errors?.hire_date ? true : false}
              errorMessage={errors?.hire_date?.message}
              type="date"
            />
          </Grid>

          <Grid item xs={4}>
            <SelectField
              label={"Type de contrat"}
              formRegistartion={register("contract_type_id")}
              isError={errors?.contract_type_id ? true : false}
              errorMessage={errors?.contract_type_id?.message}
              selectData={emplacementList}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              label="Date de Fin de Contrat "
              formRegistartion={register("end_contract")}
              isError={errors?.end_contract ? true : false}
              errorMessage={errors?.end_contract?.message}
              type="date"
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const AdditionalInfo = (props: Props) => {
  const { register, errors } = props;

  const emplacementList: SelectDataTypes[] = [
    {
      labelText: "Homme",
      value: "h",
    },
    {
      labelText: "Femme",
      value: "f",
    },
  ];

  return (
    <Stack direction={"row"} spacing={4} alignItems={"center"}>
      <Box flex={1}>
        <Grid container spacing={4}>
          <Grid item xs={4}>
            <InputField
              label={"Nom du Contact d'Urgence"}
              formRegistartion={register("additional_infos.contactName")}
              isError={errors?.additional_infos?.contactName ? true : false}
              errorMessage={errors?.additional_infos?.contactName?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              label={"Relation avec le Contact d'Urgence "}
              formRegistartion={register("additional_infos.contactRelation")}
              isError={errors?.additional_infos?.contactRelation ? true : false}
              errorMessage={errors?.additional_infos?.contactRelation?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <InputField
              label="Téléphone du Contact d'Urgence"
              formRegistartion={register("additional_infos.contactPhone")}
              isError={errors?.additional_infos?.contactPhone ? true : false}
              errorMessage={errors?.additional_infos?.contactPhone?.message}
            />
          </Grid>

          <Grid item xs={4}>
            <SelectField
              label={"État Civil"}
              selectData={emplacementList}
              formRegistartion={register("additional_infos.maritalStatus")}
              isError={errors?.additional_infos?.maritalStatus ? true : false}
              errorMessage={errors?.additional_infos?.maritalStatus?.message}
            />
          </Grid>
          <Grid item xs={4}>
            <SelectField
              label={"groupe sanguin"}
              selectData={emplacementList}
              formRegistartion={register("additional_infos.bloodGroup")}
              isError={errors?.additional_infos?.bloodGroup ? true : false}
              errorMessage={errors?.additional_infos?.bloodGroup?.message}
            />
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

const Documents = (props: Props) => {
  const { register, errors } = props;

  return <div>Addit</div>;
};

export { PersonalInfo, ProfessionalInfo, AdditionalInfo, Documents };
